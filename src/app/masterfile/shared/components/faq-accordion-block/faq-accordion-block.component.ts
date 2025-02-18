import {Component} from '@angular/core';

@Component({
  selector: 'app-faq-accordion-block',
  templateUrl: './faq-accordion-block.component.html',
  styleUrl: './faq-accordion-block.component.scss'
})
export class FaqAccordionBlockComponent {
  tabs = [
    {
      title: 'Наскільки ефективним є онлайн-прийом?',
      content: 'Онлайн-прийом так само ефективний, як і особиста зустріч, а в деяких випадках навіть більш ефективний, оскільки і лікар, і пацієнт знаходиться в комфортному для себе середовищі.\n' +
        '\n' +
        'Психологу чи психіатру в більшості випадків не потрібно проводити фізичний огляд.\n' +
        'Усі результати аналізів, якщо вони потрібні, лікар також може переглянути дистанційно.\n'
    },
    {title: 'Title 2', content: 'Content 2'},
    {title: 'Title 3', content: 'Content 3'}
  ];
}
