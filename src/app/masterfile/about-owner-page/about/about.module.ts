import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from './about.component';
import {AboutRoutingModule} from './about-routing.module';
import {LandingModule} from '../../landing-main-page/landing/landing.module';
import {TelegramBannerModule} from '../../shared/components/telegram-banner/telegram-banner.module';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    LandingModule,
    TelegramBannerModule
  ],
  exports:[AboutComponent]
})
export class AboutModule { }
