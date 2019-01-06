import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics-routing.module';

import { StatisticsService } from './statistics.service';

import { StatisticsComponent } from './statistics.component';

import { PageHeaderModule } from '@app/shared/components/page-header/page-header.module';
import { StatisticCardModule } from '@app/shared/components/statistic-card/statistic-card.module';

@NgModule({
  imports: [
    CommonModule,
    PageHeaderModule,
    StatisticCardModule,
    StatisticsRoutingModule
  ],
  providers: [
    StatisticsService
  ],
  declarations: [
    StatisticsComponent
  ]
})
export class StatisticsModule {}
