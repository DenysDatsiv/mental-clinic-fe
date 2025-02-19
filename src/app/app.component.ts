import { Component, OnInit } from '@angular/core';
import {GoogleAnalyticsService} from "./ga/service/google-analytics.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  ngOnInit() {
    this.googleAnalyticsService.initializeTracking();
  }
}
