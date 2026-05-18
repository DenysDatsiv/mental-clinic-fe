import { CommonModule } from '@angular/common';
import { ImportsModule } from '../../shared/primeng-imports.module';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, ImportsModule],
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss'
})
export class ContractComponent {

}
