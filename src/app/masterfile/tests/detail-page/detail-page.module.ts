import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page.component';
import {ImportsModule} from '../../../ shared/imports';



@NgModule({
  declarations: [
    DetailPageComponent
  ],
    imports: [
        CommonModule,
        ImportsModule,
    ]
})
export class DetailPageModule { }
