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
      private location: Location,
      private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit() {
    const typeFromUrl = this.route.snapshot.paramMap.get('type') || '';
    const categoryObj = this.categories.find(cat => cat.value === typeFromUrl) || { name: 'Всі', value: '' };
    this.searchForm.patchValue({ category: categoryObj });

    // Track dropdown selection changes
    this.searchForm.get('category')?.valueChanges.subscribe(selected => {
      const categoryValue = typeof selected === 'string' ? selected : selected?.value;
      const categoryName = typeof selected === 'string' ? selected : selected?.name;
      const newUrl = categoryValue ? `/tests/${categoryValue}` : `/tests/list`;

      this.location.replaceState(newUrl);

      // Send structured analytics event
      this.googleAnalyticsService.trackEvent(
          'category_select',
          'Dropdown',
          'Category Selected',
          { selected_category: categoryName }
      );
    });

    // Track search query changes (with debounce)
    this.searchForm.get('text')?.valueChanges.pipe(
        debounceTime(1500), // Delay tracking by 1.5 seconds
        distinctUntilChanged() // Only track if the value has changed
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

    this.tests$ = this.searchForm.valueChanges.pipe(
        debounceTime(1000), // Ensure request is only made after 1 second of inactivity
        startWith(this.searchForm.value),
        tap(() => !this.initLoad && this.loading$.next(true)),
        switchMap(({ text, category }) => {
          const searchQuery = text?.trim() || '';
          const categoryValue = typeof category === 'string' ? category : category?.value;

          const categoryFilter = searchQuery ? '' : categoryValue;

          this.first = 0;
          return this.testService.getTests(searchQuery, categoryFilter);
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

  /**
   * Handles pagination changes and tracks them in Google Analytics.
   * @param event - The pagination event containing the new page index.
   */
  onPageChange({ first = 0, rows = 10 }) {
    this.first = first;
    this.rows = rows;
    this.applyPagination();

    this.googleAnalyticsService.trackEvent(
        'pagination',
        'Navigation',
        'Page Changed',
        { current_page: Math.floor(first / rows) + 1, rows_per_page: rows }
    );
  }

  toggleButtonVisibility() {
    const { text, category } = this.searchForm.value;
    this.showButton = !!(text?.trim() || category);
  }
}
