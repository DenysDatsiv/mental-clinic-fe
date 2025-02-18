import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConsultationBlockComponent} from './consultation-block.component';
import {ImportsModule} from '../../../../ shared/imports';



@NgModule({
  declarations: [ConsultationBlockComponent],
  imports: [
    CommonModule,
    ImportsModule
  ],
  exports:[ConsultationBlockComponent]
})
export class ConsultationBlockModule { }
