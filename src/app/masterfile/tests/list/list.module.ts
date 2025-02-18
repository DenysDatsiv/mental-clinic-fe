import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list.component';
import {ImportsModule} from "../../../ shared/imports";
import {TestingBlockModule} from '../../shared/components/testing-block/testing-block.module';
import {TestsGridModule} from '../components/tests-grid/tests-grid.module';
import {FaqAccordionBlockModule} from "../../shared/components/faq-accordion-block/faq-accordion-block.module";


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
    TestingBlockModule,
    TestsGridModule,
    FaqAccordionBlockModule
  ]
})
export class ListModule {
}
