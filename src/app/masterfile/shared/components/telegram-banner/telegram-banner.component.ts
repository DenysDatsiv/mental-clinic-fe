import { Component } from '@angular/core';
import {TELEGRAM_BANNER} from "../../constants/components-name.constants";
import {GoogleAnalyticsService} from "../../../../ga/service/google-analytics.service";
import {EVENT_TRACK} from "../../../../ga/constants/ga.constants";
import {ROUTES} from "../../../../ shared/constants/routes";

@Component({
  selector: 'app-telegram-banner',
  templateUrl: './telegram-banner.component.html',
  styleUrl: './telegram-banner.component.scss'
})
export class TelegramBannerComponent {
  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  openTelegram(name:string,link: string) {
    this.googleAnalyticsService.trackEvent(EVENT_TRACK.BUTTON_CLICK,name,ROUTES.MAIN_PAGE)
    window.open(link, '_blank');

  }

  protected readonly TELEGRAM_BANNER = TELEGRAM_BANNER;
}
