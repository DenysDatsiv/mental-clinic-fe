import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../shared/primeng-imports.module';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, ImportsModule],
  selector: 'app-drugs',
  templateUrl: './drugs.component.html',
  styleUrl: './drugs.component.scss'
})
export class DrugsComponent {

}
