import {AfterViewInit, Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {SECTION} from '../../../ shared/constants/section-name-id';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {

  isHeroBannerVisible = false;
  isTestingBlockVisible = false;
  isConsultationBlockVisible = false;
  isFaqBlockVisible = false;
  isTelegramBannerVisible = false;
  protected readonly SECTION = SECTION;

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.observeElement('#hero-banner', 'isHeroBannerVisible');
    this.observeElement('#testing-block', 'isTestingBlockVisible');
    this.observeElement('#consultation-block', 'isConsultationBlockVisible');
    this.observeElement('#faq-block', 'isFaqBlockVisible');
    this.observeElement('#telegram-banner', 'isTelegramBannerVisible');
  }

  private observeElement(selector: string, stateVariable: string) {
    const element = this.el.nativeElement.querySelector(selector);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this[stateVariable] = true;
          observer.unobserve(entry.target);
        }
      },
      {threshold: 0.1}
    );

    observer.observe(element);
  }
}
