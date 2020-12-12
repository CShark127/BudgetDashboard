import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Charting
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

import { MatCardModule } from '@angular/material/card';

import { SharedModule } from '../../shared/shared.module';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxEchartsModule.forRoot({
      echarts,
    }),
    MatCardModule,
    SharedModule,
  ],
})
export class DashboardModule {}
