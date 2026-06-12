import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../../../shared/primeng-imports.module';
import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../../models/test.model';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from '../../../../analytics/google-analytics.service';
import { EVENT_TRACK } from '../../../../analytics/analytics.constants';

@Component({
  standalone: true,
  imports: [CommonModule, ImportsModule],
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() testData: any;
  protected readonly JSON = JSON;

  constructor(private router: Router, private googleAnalyticsService: GoogleAnalyticsService) {}

  ngOnInit(): void {}

  /**
   * Handles test card click, tracking analytics before navigation.
   * @param testId - The ID of the selected test.
   */
  redirectToTest(testId: string): void {
    // Track test card click event with structured analytics data
    this.googleAnalyticsService.trackEvent(EVENT_TRACK.SELECT_CONTENT, {
      content_type: 'test',
      item_id:      testId,
      item_name:    this.testData?.name ?? 'unknown',
    });

    // Navigate to test detail page
    this.router.navigate([`/test/detail`, testId]);
  }
}
