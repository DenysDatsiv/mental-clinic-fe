import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsComponent } from './tests.component';
import {RouterOutlet} from '@angular/router';
import {TestsRoutingModule} from './tests-routing.module';
import {ImportsModule} from '../../ shared/imports';
import {DetailPageModule} from './detail-page/detail-page.module';
import {ListModule} from './list/list.module';



@NgModule({
  declarations: [
    TestsComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    ListModule,
    DetailPageModule,
    TestsRoutingModule,
    ImportsModule,
  ]
})
export class TestsModule { }
