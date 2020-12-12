import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InstitutionOverviewComponent } from './components/institution-overview/institution-overview.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SummaryMetricsComponent } from './components/summary-metrics/summary-metrics.component';
import { CurrencyDisplayPipe } from './pipes/currency-display.pipe';
import { SidenavMenuComponent } from './components/sidenav-menu/sidenav-menu.component';
import { InstitutionIconComponent } from './components/institution-icon/institution-icon.component';

@NgModule({
  declarations: [
    InstitutionOverviewComponent,
    SummaryMetricsComponent,
    CurrencyDisplayPipe,
    SidenavMenuComponent,
    InstitutionIconComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatRippleModule,
    MatTooltipModule,
  ],
  exports: [
    InstitutionOverviewComponent,
    SummaryMetricsComponent,
    SidenavMenuComponent,
    InstitutionIconComponent,
  ],
})
export class SharedModule {}
