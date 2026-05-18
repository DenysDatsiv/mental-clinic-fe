import { Routes } from '@angular/router';
import { TestsComponent } from './tests.component';

export const TESTS_ROUTES: Routes = [
  {
    path: '',
    component: TestsComponent,
    children: [
      {
        path: 'detail/:id',
        loadComponent: () => import('./detail-page/detail-page.component').then(m => m.DetailPageComponent)
      },
      {
        path: 'list/:type',
        loadComponent: () => import('./list/list.component').then(m => m.ListComponent)
      },
      {
        path: 'list',
        loadComponent: () => import('./list/list.component').then(m => m.ListComponent)
      }
    ]
  }
];
