import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FaqBlockComponent} from './faq-block.component';
import {ImportsModule} from '../../../../ shared/imports';



@NgModule({
  declarations: [FaqBlockComponent],
  imports: [
    CommonModule,
    ImportsModule
  ],
  exports:[FaqBlockComponent]
})
export class FaqBlockModule { }
