import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FaqAccordionBlockComponent} from './faq-accordion-block.component';
import {ImportsModule} from "../../../../ shared/imports";


@NgModule({
  declarations: [
    FaqAccordionBlockComponent
  ],
  exports: [
    FaqAccordionBlockComponent
  ],
  imports: [
    CommonModule,
    ImportsModule
  ]
})
export class FaqAccordionBlockModule {
}
