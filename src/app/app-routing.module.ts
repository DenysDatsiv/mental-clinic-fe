import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './masterfile/shared/components/navbar/navbar.component';
import { LandingComponent } from './masterfile/landing-main-page/landing/landing.component';
import { AboutModule } from './masterfile/about-owner-page/about/about.module';
import { DrugsModule } from './masterfile/drug-page/drugs/drugs.module';
import { TestsModule } from './masterfile/tests/tests.module';
import { ContractModule } from './masterfile/public-contract-page/contract/contract.module';
import { VisitPageModule } from './masterfile/visit-page/visit-page.module';
import {ROUTES} from "./ shared/constants/routes";

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: ROUTES.ABOUT, loadChildren: () => AboutModule },
      { path: ROUTES.DRUGS, loadChildren: () => DrugsModule },
      { path: ROUTES.TEST, loadChildren: () => TestsModule },
      { path: ROUTES.CONTRACT, loadChildren: () => ContractModule },
      { path: ROUTES.VISIT, loadChildren: () => VisitPageModule },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
