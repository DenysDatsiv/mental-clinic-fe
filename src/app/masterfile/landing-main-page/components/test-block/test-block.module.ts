import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {TestBlockComponent} from './test-block.component';
import {ImportsModule} from '../../../../ shared/imports';


@NgModule({
  declarations: [
    TestBlockComponent
  ],
  exports: [
    TestBlockComponent
  ],
  imports: [
    CommonModule,
    ImportsModule,
    NgOptimizedImage
  ]
})
export class TestBlockModule {
}
