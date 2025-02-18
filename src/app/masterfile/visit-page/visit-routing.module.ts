import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VisitPageComponent} from './visit-page.component';

const routes: Routes = [
  {path: '', component: VisitPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitRoutingModule {
}
