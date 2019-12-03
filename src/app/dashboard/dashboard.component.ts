import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeworkTableComponent } from './homework-table/homework-table.component';
import { Homework } from '../models/homework.model';
import { ModalComponent } from '../shared/widgets/modal/modal.component';
import { HomeworkService } from '../services/homework.service';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from '../services';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
    @ViewChild('homeworkTable', { static: false })
    homeworkTable: HomeworkTableComponent;
    homework: Homework;

    constructor(
        public dialog: MatDialog,
        private homeworkService: HomeworkService,
        private alertService: AlertService,
        private authenticationService: AuthenticationService
    ) {}
    openDialog(): void {
        const dialogRef = this.dialog.open(ModalComponent, {
            width: '500px',
            data: {
                title: '',
                homework: '',
                deadline: '',
            },
        });

        dialogRef.afterClosed().subscribe(result => {
            this.homework = new Homework(
                result.title,
                result.homework,
                result.deadline
            );
            this.homeworkService
                .addHomework(this.homework)
                .pipe(first())
                .subscribe(
                    data => {
                        this.alertService.success('Homework is added', true);
                    },
                    error => {
                        this.alertService.error(error);
                    }
                );
        });
    }
}
