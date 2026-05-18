import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../../../shared/primeng-imports.module';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, ImportsModule],
  selector: 'app-testing-block',
  templateUrl: './testing-block.component.html',
  styleUrl: './testing-block.component.scss'
})
export class TestingBlockComponent {
  title: string = 'Тестування для раннього виявлення ментальних порушень';
  description: string = 'Отримайте швидкий і надійний аналіз свого психічного стану. Довіртеся доказовій медицині та досвіду.';
}
