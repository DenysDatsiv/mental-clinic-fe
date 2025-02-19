import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../../models/test.model';
import { Router } from '@angular/router';
import { GoogleAnalyticsService } from '../../../../ga/service/google-analytics.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() testData: Test;
  protected readonly JSON = JSON;

  constructor(private router: Router, private googleAnalyticsService: GoogleAnalyticsService) {}

  ngOnInit(): void {}

  /**
   * Handles test card click, tracking analytics before navigation.
   * @param testId - The ID of the selected test.
   */
  redirectToTest(testId: string): void {
    // Track test card click event with structured analytics data
    this.googleAnalyticsService.trackEvent(
        'click',
        'Test Interaction',
        'Test Card Clicked',
        { test_name: this.testData?.name || 'Unknown Test', test_id: testId }
    );

    // Navigate to test detail page
    this.router.navigate([`/test/detail`, testId]);
  }
}
