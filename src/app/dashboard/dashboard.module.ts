import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { DemoMaterialModule } from '../material.module';
import { DashboardComponent } from './dashboard.component';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';
import { HomeworkTableComponent } from './homework-table/homework-table.component';
import { ButtonComponent } from '../shared/widgets/button/button.component';
import { DeadlinePipe } from '../shared/pipes/deadline-pipe.pipe';
import { HeaderComponent } from '../header/header/header.component';
import { DateContainerComponent } from './date-container/date-container.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ModalComponent } from '../shared/widgets/modal/modal.component';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {
    JwtInterceptor,
    ErrorInterceptor,
    fakeBackendProvider,
} from '../helpers';

@NgModule({
    declarations: [
        HeaderComponent,
        DeadlinePipe,
        ButtonComponent,
        DashboardComponent,
        ScheduleTableComponent,
        HomeworkTableComponent,
        DateContainerComponent,
        LineChartComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatDividerModule,
        FormsModule,
        HttpClientModule,
        DemoMaterialModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        ChartsModule,
        SharedModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider,
    ],
    bootstrap: [DashboardComponent],
    entryComponents: [ModalComponent],
})
export class DashboardModule {}
