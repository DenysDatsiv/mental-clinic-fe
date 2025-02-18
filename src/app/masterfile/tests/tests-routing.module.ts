import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailPageComponent} from './detail-page/detail-page.component';
import {ListComponent} from './list/list.component';
import {TestsComponent} from './tests.component';

const routes: Routes = [
  {
    path: '',
    component: TestsComponent,
    children: [
      {path: 'detail/:id', component: DetailPageComponent},
      {path: 'list/:type', component: ListComponent},
      {path: 'list', component: ListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule {
}
