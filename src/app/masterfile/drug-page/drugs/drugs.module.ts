import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugsComponent } from './drugs.component';
import {DrugsRoutingModule} from './drugs-routing.module';



@NgModule({
  declarations: [
    DrugsComponent
  ],
  imports: [
    CommonModule,
    DrugsRoutingModule
  ],
  exports:[DrugsComponent]
})
export class DrugsModule { }
