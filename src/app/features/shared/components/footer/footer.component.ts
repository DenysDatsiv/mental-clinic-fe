import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../../../shared/primeng-imports.module';
import { ClinicContactsDialogComponent } from '../clinic-contacts-dialog/clinic-contacts-dialog.component';
import { Component, inject } from '@angular/core';
import { ClinicContactsService } from '../clinic-contacts-dialog/clinic-contacts.service';
import { clinicContacts } from '../../constants/contacts.constants';
import { GoogleAnalyticsService } from '../../../../analytics/google-analytics.service';

@Component({
  standalone: true,
  imports: [CommonModule, ImportsModule, ClinicContactsDialogComponent],
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  private readonly contactsService = inject(ClinicContactsService);
  private readonly googleAnalyticsService = inject(GoogleAnalyticsService);

  /**
   * Tracks social media link clicks
   * @param platform - Social media platform (Facebook, Instagram, Telegram)
   * @param url - The destination URL
   */
  trackSocialClick(platform: string, url: string) {
    this.googleAnalyticsService.trackEvent(
        'click',
        'Social Media',
        platform,
        { destination_url: url }
    );
  }

  /**
   * Tracks clicks on footer links
   * @param linkName - The name of the link (e.g., "Публічний договір")
   * @param url - The destination URL
   */
  trackLinkClick(linkName: string, url: string) {
    this.googleAnalyticsService.trackEvent(
        'click',
        'Footer Link',
        linkName,
        { destination_url: url }
    );
  }

  /**
   * Opens the contacts dialog and tracks the event
   */
  openContacts() {
    this.contactsService.openDialog(clinicContacts);
    this.googleAnalyticsService.trackEvent(
        'click',
        'Button',
        'Contact Button',
        { label: 'Phone Icon' }
    );
  }
}
