import {Component, OnInit} from '@angular/core';
import {Observable, takeUntil} from 'rxjs';
import {ClinicContactsService} from './clinic-contacts.service';
import {ClearObservable} from '../../../../ shared/unsubscribtion/ClearObservable';

@Component({
  selector: 'app-clinic-contacts-dialog',
  templateUrl: './clinic-contacts-dialog.component.html',
  styleUrls: ['./clinic-contacts-dialog.component.scss']
})
export class ClinicContactsDialogComponent extends ClearObservable implements OnInit {
  visible: boolean = false;
  contacts$: Observable<Record<string, { name: string; phone: string }>>;

  constructor(private contactsService: ClinicContactsService) {
    super();
    this.contacts$ = this.contactsService.contacts$;
  }

  ngOnInit() {
    this.contactsService.isVisible$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isVisible) => {
        this.visible = isVisible;
      });
  }


  openTelegram(phone: string) {
    window.open(`https://t.me/${phone}`, '_blank');
  }

  openViber(phone: string) {
    window.open(`viber://chat?number=${phone}`, '_blank');
  }
}
