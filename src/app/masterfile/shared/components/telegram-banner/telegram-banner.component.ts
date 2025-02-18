import { Component } from '@angular/core';

@Component({
  selector: 'app-telegram-banner',
  templateUrl: './telegram-banner.component.html',
  styleUrl: './telegram-banner.component.scss'
})
export class TelegramBannerComponent {
  openTelegram(link: string) {
    window.open(link, '_blank');
  }

}
