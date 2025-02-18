import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import {ImportsModule} from '../../../../ shared/imports';



@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent,
  ],
  imports: [
    CommonModule,
    ImportsModule

  ]
})
export class CardModule { }
