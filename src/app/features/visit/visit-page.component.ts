import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../shared/primeng-imports.module';
import {Component} from '@angular/core';
import {ClinicContactsService} from '../shared/components/clinic-contacts-dialog/clinic-contacts.service';
import {clinicContacts} from '../shared/constants/contacts.constants';

@Component({
  standalone: true,
  imports: [CommonModule, ImportsModule],
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
