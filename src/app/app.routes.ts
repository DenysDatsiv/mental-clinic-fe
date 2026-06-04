import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LandingComponent } from './features/landing/landing.component';
import { ROUTES } from './shared/constants/routes.constants';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: LandingComponent },
      {
        path: ROUTES.ABOUT,
        loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
      },
      {
        path: ROUTES.DRUGS,
        loadComponent: () => import('./features/drugs/drugs.component').then(m => m.DrugsComponent),
      },
      {
        path: 'test',
        loadChildren: () => import('./features/tests/tests.routes').then(m => m.TESTS_ROUTES),
      },
      {
        path: ROUTES.CONTRACT,
        loadComponent: () => import('./features/contract/contract.component').then(m => m.ContractComponent),
      },
      {
        path: ROUTES.VISIT,
        loadComponent: () => import('./features/visit/visit-page.component').then(m => m.VisitPageComponent),
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];
