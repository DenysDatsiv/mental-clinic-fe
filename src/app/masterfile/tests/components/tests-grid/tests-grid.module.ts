import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsGridComponent } from './tests-grid.component';
import {ImportsModule} from '../../../../ shared/imports';
import {DragDropModule} from 'primeng/dragdrop';
import {CardModule} from '../card/card.module';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    TestsGridComponent,

  ],
  exports: [
    TestsGridComponent,
  ],
  imports: [
    CommonModule,
    ImportsModule,
    DragDropModule,
    CardModule,
    ReactiveFormsModule
  ]
})
export class TestsGridModule { }
