import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './masterfile/shared/components/navbar/navbar.component';
import {LandingComponent} from './masterfile/landing-main-page/landing/landing.component';
import {ROUTES} from './ shared/constants/routes';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {path: '', component: LandingComponent},
      {
        path: ROUTES.ABOUT,
        loadChildren: () => import('./masterfile/about-owner-page/about/about.module').then(m => m.AboutModule)
      },
      {
        path: ROUTES.DRUGS,
        loadChildren: () => import('./masterfile/drug-page/drugs/drugs.module').then(m => m.DrugsModule)
      },
      {
        path: ROUTES.TEST,
        loadChildren: () => import('../app/masterfile/tests/tests.module').then(m => m.TestsModule)
      },
      {
        path: ROUTES.CONTRACT,
        loadChildren: () => import('./masterfile/public-contract-page/contract/contract.module').then(m => m.ContractModule)
      },
      {
        path: ROUTES.VISIT,
        loadChildren: () => import('./masterfile/visit-page/visit-page.module').then(m => m.VisitPageModule)
      },
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
