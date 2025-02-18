import {Component} from '@angular/core';
import {TEST_ROUTES} from '../../../../ shared/constants/routes';
import {TEST_CATEGORIES_CONST} from '../../../tests/constants/categories';

interface MentalCard {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

@Component({
  selector: 'app-test-block',
  templateUrl: './test-block.component.html',
  styleUrls: ['./test-block.component.scss']
})
export class TestBlockComponent {
  mentalCards: MentalCard[] = [
    {
      title: 'Депресія',
      description:
        'Депресія – розлад із постійним смутком та втратою інтересу. Дізнайтеся про сучасні методи лікування та підтримку.',
      imageUrl: 'assets/depression.svg',
      link: TEST_CATEGORIES_CONST.DEPRESSION
    },
    {
      title: 'Тривога',
      description:
        'Тривога супроводжується надмірним занепокоєнням та страхом. Ознайомтеся з ефективними техніками управління тривогою.',
      imageUrl: 'assets/anxiety.svg',
      link: TEST_CATEGORIES_CONST.ANXIETY
    },
    {
      title: 'Особистісні розлади',
      description:
        'Розлади особистості впливають на емоції та стосунки. Дізнайтеся про симптоми та сучасні методи терапії.',
      imageUrl: 'assets/disorder.svg',
      link: TEST_CATEGORIES_CONST.PERSONALITY_DISORDERS
    },
    {
      title: 'Поведінкові розлади',
      description:
        'Поведінкові розлади характеризуються імпульсивністю та порушенням норм. Ознайомтеся з методами лікування.',
      imageUrl: 'assets/behaviour-disorder.svg',
      link: TEST_CATEGORIES_CONST.BEHAVIORAL_DISORDERS
    },
    {
      title: 'Залежності',
      description:
        'Залежності впливають на всі аспекти життя. Дізнайтеся про види залежностей та ефективні стратегії реабілітації.',
      imageUrl: 'assets/addition-tests.svg',
      link: TEST_CATEGORIES_CONST.ADDICTIONS
    }

  ];
  protected readonly TEST_ROUTES = TEST_ROUTES;
}
