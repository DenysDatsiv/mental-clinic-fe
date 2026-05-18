import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from './analytics/google-analytics.service';
import { FooterComponent } from './features/shared/components/footer/footer.component';
import { ClinicContactsDialogComponent } from './features/shared/components/clinic-contacts-dialog/clinic-contacts-dialog.component';

@Component({
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ClinicContactsDialogComponent],
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
