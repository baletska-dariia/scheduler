import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';

import { DemoMaterialModule } from '../material.module';
import { DashboardComponent } from './dashboard.component';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';
import { HomeworkTableComponent } from './homework-table/homework-table.component';
import { SharedModule } from '../shared/shared.module';
import { ButtonComponent } from '../shared/button/button.component';

@NgModule({
  declarations: [
    ButtonComponent,
    DashboardComponent,
    ScheduleTableComponent,
    HomeworkTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule {}
