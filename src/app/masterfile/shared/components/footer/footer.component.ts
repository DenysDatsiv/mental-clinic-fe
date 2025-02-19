import { Component } from '@angular/core';
import { ClinicContactsService } from '../clinic-contacts-dialog/clinic-contacts.service';
import { clinicContacts } from '../../constants/contacts.constant';
import { GoogleAnalyticsService } from '../../../../ga/service/google-analytics.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(
      private contactsService: ClinicContactsService,
      private googleAnalyticsService: GoogleAnalyticsService
  ) {}

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
