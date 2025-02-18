import {Component} from '@angular/core';
import {ClinicContactsService} from '../clinic-contacts-dialog/clinic-contacts.service';
import {clinicContacts} from '../../constants/contacts.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private contactsService: ClinicContactsService) {
  }

  openContacts() {
    this.contactsService.openDialog(clinicContacts);
  }
}
