import { Component } from '@angular/core';

@Component({
  selector: 'app-consultation-block',
  templateUrl: './consultation-block.component.html',
  styleUrls: ['./consultation-block.component.scss'],
})
export class ConsultationBlockComponent {
  consultationSlides = [
    {
      title: 'Крок 1. Зв’яжіться з нашим адміністратором для обговорення деталей',
      description:
        'Перший етап – це зв’язок з адміністратором, щоб обговорити ваші потреби, деталі консультації та відповісти на всі ваші запитання.',
      image: 'assets/support.svg',
    },
    {
      title: 'Крок 2. Вибір консультанта для вашої консультації',
      description:
        'На другому етапі ви разом із адміністратором підбираєте консультанта, який найкраще відповідає вашим потребам і має потрібну спеціалізацію.',
      image: 'assets/doctor.svg',
    },
    {
      title: 'Крок 3. Проведення інформаційної консультації у зручний для вас час',
      description:
        'На третьому етапі відбувається інформування з вибраним консультантом у зручний для вас час, з урахуванням усіх домовленостей.',
      image: 'assets/rest-time.svg',
    },
  ];


  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
