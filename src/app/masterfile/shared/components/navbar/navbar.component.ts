import {Component} from '@angular/core';
import {SECTION} from '../../../../ shared/constants/section-name-id';
import {ROUTES, TEST_ROUTES} from '../../../../ shared/constants/routes';
import {Router} from '@angular/router';
import {ClinicContactsService} from '../clinic-contacts-dialog/clinic-contacts.service';
import {clinicContacts} from '../../constants/contacts.constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
  protected readonly SECTION = SECTION;
  protected readonly ROUTES = ROUTES;
  protected readonly TEST_ROUTES = TEST_ROUTES;

  constructor(private router: Router, private contactsService: ClinicContactsService) {
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  redirectToMainPage(): void {
    this.router.navigate(['/']);
  }

  openContacts() {
    this.contactsService.openDialog(clinicContacts);
  }
}
