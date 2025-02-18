import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingModule} from './masterfile/landing-main-page/landing/landing.module';
import {NavbarModule} from './masterfile/shared/components/navbar/navbar.module';
import {DragDropModule} from 'primeng/dragdrop';

import {AboutModule} from './masterfile/about-owner-page/about/about.module';
import {DrugsModule} from './masterfile/drug-page/drugs/drugs.module';
import {ImportsModule} from './ shared/imports';
import {FooterModule} from './masterfile/shared/components/footer/footer.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TestsModule} from './masterfile/tests/tests.module';
import {
  ClinicContactsDialogModule
} from './masterfile/shared/components/clinic-contacts-dialog/clinic-contacts-dialog.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    NavbarModule,
    TestsModule,
    FormsModule,
    ImportsModule,
    DragDropModule,
    DrugsModule,
    AboutModule,
    FooterModule,
    BrowserAnimationsModule,
    ClinicContactsDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
