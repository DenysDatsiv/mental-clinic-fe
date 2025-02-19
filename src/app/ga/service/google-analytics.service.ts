// import { Injectable } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';
//
// declare let gtag: Function; // Reference global gtag function
//
// @Injectable({
//   providedIn: 'root'
// })
// export class GoogleAnalyticsService {
//   constructor(private router: Router) {}
//
//   initializeTracking() {
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         // gtag('config', 'G-QL51QSPEPK', { 'page_path': event.urlAfterRedirects });
//         gtag('config', 'GTM-KXHTC3VT', { 'page_path': event.urlAfterRedirects });
//       }
//     });
//   }
//
//   trackEvent(eventName: string, eventParams: any = {}) {
//     gtag('event', eventName, eventParams);
//   }
// }
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare let gtag: Function; // Reference global gtag function

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  private previousUrl: string = '';

  constructor(private router: Router) {}

  initializeTracking() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;

        // Send event with previous URL as a parameter
        gtag('config', 'G-QL51QSPEPK', {
          'page_path': currentUrl,
          'page_referrer': this.previousUrl || 'direct' // Capture previous URL
        });

        // Update previous URL for next navigation
        this.previousUrl = currentUrl;
      }
    });
  }

  /**
   * Tracks a custom event in Google Analytics.
   * @param eventName - The event action (e.g., 'click', 'navigate', 'form_submit').
   * @param eventCategory - The category of the event (e.g., 'Button', 'Navigation', 'Form').
   * @param eventLabel - A descriptive label for the event (e.g., 'Finish Test', 'Contact Us Form').
   * @param additionalParams - Optional additional parameters (e.g., test name, button ID).
   */
  trackEvent(
      eventName: string,
      eventCategory: string,
      eventLabel: string,
      additionalParams: Record<string, any> = {}
  ) {
    if (typeof gtag !== 'function') {
      console.warn('Google Analytics is not initialized.');
      return;
    }

    const eventData = {
      event_category: eventCategory,
      event_label: eventLabel,
      previous_page: this.previousUrl || 'direct',
      timestamp: new Date().toISOString(),
      ...additionalParams
    };

    try {
      gtag('event', eventName, eventData);
    } catch (error) {
      console.error('[GA Error] Failed to send event:', error);
    }
  }

}
