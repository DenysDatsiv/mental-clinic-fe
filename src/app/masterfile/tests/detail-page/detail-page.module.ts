import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page.component';
import {ImportsModule} from '../../../ shared/imports';
import {FaqAccordionBlockModule} from "../../shared/components/faq-accordion-block/faq-accordion-block.module";



@NgModule({
  declarations: [
    DetailPageComponent
  ],
    imports: [
        CommonModule,
        ImportsModule,
        FaqAccordionBlockModule,
    ]
})
export class DetailPageModule { }
