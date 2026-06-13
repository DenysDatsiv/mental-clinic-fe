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
import {ArticlesListComponent} from "./features/articles/list/articles-list.component";
import {ArticleDetailComponent} from "./features/articles/detail/article-detail.component";
import {ReviewsComponent} from "./features/reviews/reviews.component";
import {NotFoundComponent} from "./features/not-found/not-found.component";

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
      // Articles — category filter must come before :id to avoid shadow
      {
        path: `${ROUTES.ARTICLES}/category/:cat`,
        component: ArticlesListComponent
      },
      {
        path: ROUTES.ARTICLES,
        component: ArticlesListComponent
      },
      {
        path: `${ROUTES.ARTICLES}/:id`,
        component: ArticleDetailComponent
      },
      {
        path: ROUTES.REVIEWS,
        component: ReviewsComponent
      },
      { path: '**', component: NotFoundComponent },
    ],
  },
];
