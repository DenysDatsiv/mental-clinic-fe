import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {debounceTime, startWith, switchMap, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {testsCategories} from '../../constants/categories';
import {TestService} from '../../services/test.service';
import {Test} from '../../models/test.model';
import {Location} from '@angular/common';

@Component({
  selector: 'app-tests-grid',
  templateUrl: './tests-grid.component.html',
  styleUrls: ['./tests-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestsGridComponent implements OnInit {
  categories = testsCategories;
  searchForm = new FormGroup({
    text: new FormControl(''),
    category: new FormControl({name: 'Всі', value: ''})
  });

  tests$: Observable<Test[]>;
  allTests: any[] = [];
  paginatedTests$ = new BehaviorSubject<any[]>([]);
  loading$ = new BehaviorSubject<boolean>(false);

  totalRecords = 0;
  first = 0;
  rows = 10;
  showButton = false;
  initLoad = true;

  constructor(
    private testService: TestService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit() {
    const typeFromUrl = this.route.snapshot.paramMap.get('type') || '';
    const categoryObj = this.categories.find(cat => cat.value === typeFromUrl) || {name: 'Всі', value: ''};
    this.searchForm.patchValue({category: categoryObj});

    this.searchForm.get('category')?.valueChanges.subscribe(selected => {
      const categoryValue = typeof selected === 'string' ? selected : selected?.value;
      const newUrl = categoryValue ? `/tests/${categoryValue}` : `/tests/list`;
      this.location.replaceState(newUrl);
    });

    this.tests$ = this.searchForm.valueChanges.pipe(
      debounceTime(1000),
      startWith(this.searchForm.value),
      tap(() => !this.initLoad && this.loading$.next(true)),
      switchMap(({text, category}) => {
        const categoryValue = typeof category === 'string' ? category : category?.value;
        this.first = 0;
        return this.testService.getTests(text, categoryValue);
      }),
      tap(data => {
        this.allTests = data;
        this.totalRecords = data.length;
        this.applyPagination();
        this.loading$.next(false);
        if (this.initLoad) {
          this.initLoad = false;
        }
      })
    );

    this.tests$.subscribe(() => this.applyPagination());
    this.searchForm.valueChanges.subscribe(() => this.toggleButtonVisibility());
    this.toggleButtonVisibility();
  }

  applyPagination() {
    this.paginatedTests$.next(this.allTests.slice(this.first, this.first + this.rows));
  }

  onPageChange({first = 0, rows = 10}) {
    this.first = first;
    this.rows = rows;
    this.applyPagination();
  }

  toggleButtonVisibility() {
    const {text, category} = this.searchForm.value;
    this.showButton = !!(text?.trim() || category);
  }
}
