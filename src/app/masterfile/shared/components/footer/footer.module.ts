import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {ImportsModule} from "../../../../ shared/imports";
import {ClinicContactsDialogModule} from "../clinic-contacts-dialog/clinic-contacts-dialog.module";


@NgModule({
  declarations: [FooterComponent],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
    ClinicContactsDialogModule
  ]
})
export class FooterModule {
}
