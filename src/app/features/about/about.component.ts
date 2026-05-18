import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../shared/primeng-imports.module';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, ImportsModule],
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
