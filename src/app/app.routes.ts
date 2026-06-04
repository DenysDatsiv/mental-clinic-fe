import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LandingComponent } from './features/landing/landing.component';
import { ROUTES } from './shared/constants/routes.constants';
import {AboutComponent} from "./features/about/about.component";
import {DrugsComponent} from "./features/drugs/drugs.component";
import {VisitPageComponent} from "./features/visit/visit-page.component";
import {ContractComponent} from "./features/contract/contract.component";
import {TestsComponent} from "./features/tests/tests.component";
import {DetailPageComponent} from "./features/tests/detail-page/detail-page.component";
import {ListComponent} from "./features/tests/list/list.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: LandingComponent },
      {
        path: ROUTES.ABOUT,
        component: AboutComponent
      },
      {
        path: ROUTES.DRUGS,
        component:DrugsComponent
      },
      {
        path: 'test',
        component: TestsComponent,
        children: [
          {
            path: 'detail/:id',
            component:DetailPageComponent
          },
          {
            path: 'list/:type',
            component:ListComponent
          },
          {
            path: 'list',
            component:ListComponent
          },
        ],      },
      {
        path: ROUTES.CONTRACT,
        component:ContractComponent
      },
      {
        path: ROUTES.VISIT,
        component:VisitPageComponent
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  },
];
