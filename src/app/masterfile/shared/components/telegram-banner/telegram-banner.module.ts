import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TelegramBannerComponent} from './telegram-banner.component';
import {ImportsModule} from '../../../../ shared/imports';


@NgModule({
  declarations: [TelegramBannerComponent],
  imports: [
    CommonModule,
    ImportsModule,
  ],
  exports:[TelegramBannerComponent]
})
export class TelegramBannerModule { }
