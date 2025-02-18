import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroBannerComponent} from './hero-banner.component';
import {ImportsModule} from '../../../../ shared/imports';



@NgModule({
  declarations: [HeroBannerComponent],
  imports: [
    CommonModule,
    ImportsModule
  ],
  exports:[HeroBannerComponent]
})
export class HeroBannerModule { }
