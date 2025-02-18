import {Component} from '@angular/core';
import {ClinicContactsService} from '../shared/components/clinic-contacts-dialog/clinic-contacts.service';
import {clinicContacts} from '../shared/constants/contacts.constant';

@Component({
  selector: 'app-visit-page',
  templateUrl: './visit-page.component.html',
  styleUrl: './visit-page.component.scss'
})
export class VisitPageComponent {
  constructor(private contactsService: ClinicContactsService) {
  }

  openContacts() {
    this.contactsService.openDialog(clinicContacts);
  }
}
