import {Component, Input, OnInit} from '@angular/core';
import {Test} from '../../models/test.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() testData: Test
  protected readonly JSON = JSON;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // console.log('Test data in child:', this.testData);
  }

  redirectToTest(testId: string): void {
    this.router.navigate([`/test/detail`, testId]);
  }
}
