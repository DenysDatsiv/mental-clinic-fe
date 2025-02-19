import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClinicContactsService } from '../clinic-contacts-dialog/clinic-contacts.service';
import { clinicContacts } from '../../constants/contacts.constant';
import { GoogleAnalyticsService } from '../../../../ga/service/google-analytics.service';
import {SECTION} from "../../../../ shared/constants/section-name-id";
import {TEST_ROUTES,ROUTES} from "../../../../ shared/constants/routes";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  protected readonly SECTION = SECTION;
  protected readonly ROUTES = ROUTES;
  protected readonly TEST_ROUTES = TEST_ROUTES;

  constructor(
      private router: Router,
      private contactsService: ClinicContactsService,
      private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  /**
   * Toggles the navigation menu state and tracks the event.
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.googleAnalyticsService.trackEvent(
        'click',
        'Navigation',
        'Menu Toggle',
        { menu_state: this.isMenuOpen ? 'Opened' : 'Closed' }
    );
  }

  /**
   * Redirects to the main page and tracks the logo click event.
   */
  redirectToMainPage(): void {
    this.googleAnalyticsService.trackEvent(
        'click',
        'Navigation',
        'Navbar Logo Clicked',
        { destination: '/' }
    );
    this.router.navigate(['/']);
  }

  /**
   * Navigates to a specified route, tracks navigation, and closes the menu.
   * @param route - The target route
   * @param label - The label for tracking (e.g., 'Тести', 'Перевірка ліків')
   */
  navigateTo(route: string, label: string): void {
    this.googleAnalyticsService.trackEvent(
        'click',
        'Navigation',
        `Navbar Link - ${label}`,
        { destination: route }
    );
    this.router.navigate([route]);
    this.toggleMenu(); // Close menu after navigation
  }

  /**
   * Opens the contact dialog and tracks the click event.
   */
  openContacts(): void {
    this.googleAnalyticsService.trackEvent(
        'click',
        'Navigation',
        'Navbar Contact Button',
        { destination: '/contact' }
    );
    this.contactsService.openDialog(clinicContacts);
    this.toggleMenu(); // Close menu after opening the dialog
  }
}
