import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {RouterModule} from '@angular/router';
import {Button} from "primeng/button";


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    Button,
  ],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
