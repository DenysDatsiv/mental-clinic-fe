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
  /**
   * Tracks a custom event in Google Analytics.
   * @param eventName - The event action (e.g., 'page_view', 'button_click').
   * @param eventCategory - The category of the event.
   * @param eventLabel - A descriptive label for the event.
   * @param additionalParams - Optional parameters.
   */
  trackEvent(eventName: string, eventCategory: string, eventLabel: string, additionalParams: Record<string, any> = {}) {
    if (typeof gtag !== 'function') {
      console.warn('Google Analytics is not initialized.');
      return;
    }

    const deviceInfo = this.getDeviceInfo();

    const eventData = {
      event_category: eventCategory || null,
      event_label: eventLabel || null ,
      browser: deviceInfo.browser || null,
      os: deviceInfo.os || null ,
      device_type: deviceInfo.deviceType || null ,
      ...additionalParams || null
    };

    gtag('event', eventName, eventData);
  }

  /**
   * Gets the user's browser, OS, and device type.
   */
  getDeviceInfo(): { browser: string; os: string; deviceType: string } {
    const userAgent = navigator.userAgent;
    let browser = 'Unknown';
    let os = 'Unknown';
    let deviceType = 'Desktop';

    if (/mobile/i.test(userAgent)) deviceType = 'Mobile';
    if (/tablet/i.test(userAgent)) deviceType = 'Tablet';

    if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Edg')) browser = 'Edge';
    else if (userAgent.includes('Chrome')) browser = 'Chrome';
    else if (userAgent.includes('Safari')) browser = 'Safari';
    else if (userAgent.includes('Opera') || userAgent.includes('OPR')) browser = 'Opera';

    if (/Win/i.test(userAgent)) os = 'Windows';
    else if (/Mac/i.test(userAgent)) os = 'MacOS';
    else if (/Linux/i.test(userAgent)) os = 'Linux';
    else if (/Android/i.test(userAgent)) os = 'Android';
    else if (/iOS|iPad|iPhone/i.test(userAgent)) os = 'iOS';

    return { browser, os, deviceType };
  }

}
