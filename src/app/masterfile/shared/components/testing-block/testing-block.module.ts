import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestingBlockComponent} from './testing-block.component';
import {ImportsModule} from '../../../../ shared/imports';

@NgModule({
  declarations: [TestingBlockComponent],
  imports: [
    CommonModule,
    ImportsModule,
  ],
  exports:[TestingBlockComponent]
})
export class TestingBlockModule { }
