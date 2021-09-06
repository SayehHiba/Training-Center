import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from 'theme';
import { BrowserStatisticsChartComponent } from '../charts/browser-statistics-chart';
import { CountryStatisticsChartComponent } from '../charts/country-statistics-chart';

import { CotoneasterCardComponent } from './cotoneaster-card';
import { DashboardComponent } from './dashboard.component';
import { LineChartComponent } from './line-chart';

import { RobotCardComponent } from './robot-card';
import { TableCardComponent } from './table-card';
import { TodoListComponent } from './todo-list';
import { TrendingComponent } from './trending';
import { WeatherComponent } from './weather';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    FormsModule,
  ],
  declarations: [
    BrowserStatisticsChartComponent,
    DashboardComponent,
    LineChartComponent,
    CountryStatisticsChartComponent,
    WeatherComponent,
    CotoneasterCardComponent,
    TableCardComponent,
    RobotCardComponent,
    TodoListComponent,
    TrendingComponent,
  ],
  exports: [
    CountryStatisticsChartComponent,
    WeatherComponent,
    TrendingComponent,
    BrowserStatisticsChartComponent
  ],
})
export class DashboardModule { }
