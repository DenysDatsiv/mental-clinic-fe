import {Component, OnInit} from '@angular/core';
import {SECTION} from '../../../ shared/constants/section-name-id';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{


  items = [
    {name: 'Item 1', description: 'Description 1', category: 'Category 1'},
    {name: 'Item 2', description: 'Description 2', category: 'Category 2'},
    {name: 'Item 3', description: 'Description 3', category: 'Category 3'}
  ];

  filteredItems = [...this.items];
  protected readonly SECTION = SECTION;

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }


}
