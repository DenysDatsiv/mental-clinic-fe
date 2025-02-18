import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {LandingComponent} from './landing.component';
import {ButtonModule} from 'primeng/button';
import {TestsGridModule} from '../../tests/components/tests-grid/tests-grid.module';
import {HeroBannerComponent} from '../../shared/components/hero-banner/hero-banner.component';
import {TestingBlockComponent} from '../../shared/components/testing-block/testing-block.component';
import {ImportsModule} from '../../../ shared/imports';
import {TelegramBannerModule} from '../../shared/components/telegram-banner/telegram-banner.module';
import {FaqBlockModule} from '../../shared/components/faq-block/faq-block.module';
import {ConsultationBlockModule} from '../../shared/components/consultation-block/consultation-block.module';
import {HeroBannerModule} from '../../shared/components/hero-banner/hero-banner.module';
import {TestingBlockModule} from '../../shared/components/testing-block/testing-block.module';
import {TestBlockModule} from "../components/test-block/test-block.module";

@NgModule({
  declarations: [LandingComponent],
    imports: [
        CommonModule,
        RouterModule,
        ButtonModule,
        TestsGridModule,
        ImportsModule,
        FaqBlockModule,
        HeroBannerModule,
        ConsultationBlockModule,
        TelegramBannerModule,
        TestingBlockModule,
        TestBlockModule,
    ],
  exports: [LandingComponent],
})
export class LandingModule {}
