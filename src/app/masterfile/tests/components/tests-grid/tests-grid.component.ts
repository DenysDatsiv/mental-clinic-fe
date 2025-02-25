import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, startWith, switchMap, tap, distinctUntilChanged } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { testsCategories } from '../../constants/categories';
import { TestService } from '../../services/test.service';
import { Test } from '../../models/test.model';
import { Location } from '@angular/common';
import { GoogleAnalyticsService } from '../../../../ga/service/google-analytics.service';
import { shareReplay } from 'rxjs/operators';

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
    category: new FormControl({ name: 'Всі', value: '' })
  });

  tests$: Observable<Test[]>;
  allTests: any[] = [];
  loading$ = new BehaviorSubject<boolean>(false);
  showButton = false;
  initLoad = true;

  constructor(
      private testService: TestService,
      private route: ActivatedRoute,
      private location: Location,
      private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit() {
    const typeFromUrl = this.route.snapshot.paramMap.get('type') || '';
    const categoryObj = this.categories.find(cat => cat.value === typeFromUrl) || { name: 'Всі', value: '' };
    this.searchForm.patchValue({ category: categoryObj });

    // Listen for category changes to update URL and track event
    this.searchForm.get('category')?.valueChanges.subscribe(selected => {
      const categoryValue = typeof selected === 'string' ? selected : selected?.value;
      const categoryName = typeof selected === 'string' ? selected : selected?.name;
      const newUrl = categoryValue ? `/tests/${categoryValue}` : `/tests/list`;
      this.location.replaceState(newUrl);

      this.googleAnalyticsService.trackEvent(
          'category_select',
          'Dropdown',
          'Category Selected',
          { selected_category: categoryName }
      );
    });

    // Listen for search text changes to track events
    this.searchForm.get('text')?.valueChanges.pipe(
        debounceTime(1500),
        distinctUntilChanged()
    ).subscribe(searchText => {
      if (searchText.trim()) {
        this.googleAnalyticsService.trackEvent(
            'search',
            'User Input',
            'Search Performed',
            { search_query: searchText.trim() }
        );
      }
    });

    // Build tests observable with shared subscription
    this.tests$ = this.searchForm.valueChanges.pipe(
        debounceTime(1000),
        startWith(this.searchForm.value),
        tap(() => this.loading$.next(true)), // Always show the spinner until data is loaded
        switchMap(({ text, category }) => {
          const searchQuery = text?.trim() || '';
          const categoryValue = typeof category === 'string' ? category : category?.value;
          return this.testService.getTests(searchQuery, categoryValue);
        }),
        tap(data => {
          this.allTests = data;
          this.loading$.next(false);
          if (this.initLoad) {
            this.initLoad = false;
          }
        }),
        shareReplay(1)
    );

    this.searchForm.valueChanges.subscribe(() => this.toggleButtonVisibility());
    this.toggleButtonVisibility();
  }

  toggleButtonVisibility() {
    const { text, category } = this.searchForm.value;
    this.showButton = !!(text?.trim() || category);
  }
}
