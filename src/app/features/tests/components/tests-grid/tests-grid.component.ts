import { CommonModule, Location } from '@angular/common';
import { ImportsModule } from '../../../../shared/primeng-imports.module';
import { CardComponent } from '../test-card/card.component';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, startWith, switchMap, tap, distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { testsCategories } from '../../constants/test-categories.constants';
import { TestService } from '../../services/test.service';
import { Test } from '../../models/test.model';
import { GoogleAnalyticsService } from '../../../../analytics/google-analytics.service';
import { shareReplay } from 'rxjs/operators';

@Component({
  standalone: true,
  imports: [CommonModule, ImportsModule, CardComponent, ReactiveFormsModule],
  selector: 'app-tests-grid',
  templateUrl: './tests-grid.component.html',
  styleUrls: ['./tests-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestsGridComponent implements OnInit {
  private readonly testService = inject(TestService);
  private readonly route = inject(ActivatedRoute);
  private readonly location = inject(Location);
  private readonly analytics = inject(GoogleAnalyticsService);

  categories = testsCategories;
  skeletonItems = Array(6);

  searchForm = new FormGroup({
    text: new FormControl(''),
    category: new FormControl<{ name: string; value: string }>({ name: 'Всі', value: '' }),
  });

  loading = signal(false);
  tests$!: Observable<Test[]>;

  ngOnInit() {
    const typeFromUrl = this.route.snapshot.paramMap.get('type') ?? '';
    const categoryObj = this.categories.find(c => c.value === typeFromUrl) ?? { name: 'Всі', value: '' };
    this.searchForm.patchValue({ category: categoryObj });

    this.searchForm.get('category')?.valueChanges.subscribe(selected => {
      const categoryValue = typeof selected === 'string' ? selected : selected?.value;
      const categoryName  = typeof selected === 'string' ? selected : selected?.name;
      this.location.replaceState(categoryValue ? `/tests/${categoryValue}` : `/tests/list`);
      this.analytics.trackEvent('category_select', { category: categoryName ?? '' });
    });

    this.searchForm.get('text')?.valueChanges.pipe(
      debounceTime(1500),
      distinctUntilChanged(),
    ).subscribe(q => {
      if (q?.trim()) {
        this.analytics.trackEvent('search', { search_term: q.trim() });
      }
    });

    this.tests$ = this.searchForm.valueChanges.pipe(
      debounceTime(300),
      startWith(this.searchForm.value),
      tap(() => this.loading.set(true)),
      switchMap(({ text, category }) => {
        const query = text?.trim() ?? '';
        const type  = typeof category === 'string' ? category : category?.value ?? '';
        return this.testService.getTests(query, type);
      }),
      tap(() => this.loading.set(false)),
      shareReplay(1),
    );
  }

  isActiveCategory(cat: { name: string; value: string }): boolean {
    const current = this.searchForm.get('category')?.value;
    const currentVal = typeof current === 'string' ? current : current?.value;
    return currentVal === cat.value;
  }

  selectCategory(cat: { name: string; value: string }): void {
    this.searchForm.patchValue({ category: cat });
  }

  resetSearch(): void {
    this.searchForm.patchValue({ text: '', category: { name: 'Всі', value: '' } });
  }
}
