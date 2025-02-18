import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClinicContactsDialogComponent} from './clinic-contacts-dialog.component';
import {ImportsModule} from '../../../../ shared/imports';


@NgModule({
  declarations: [
    ClinicContactsDialogComponent
  ],
  exports: [
    ClinicContactsDialogComponent
  ],
  imports: [
    CommonModule,
    ImportsModule
  ]
})
export class ClinicContactsDialogModule {
}
