import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeworkTableComponent } from './homework-table/homework-table.component';
import { Homework } from '../models/homework.model';
import { ModalComponent } from '../shared/widgets/modal/modal.component';
import { HomeworkService } from '../services/homework.service';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from '../services';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    @ViewChild('homeworkTable', { static: false })
    homeworkTable: HomeworkTableComponent;
    homework: Homework;
    langs = [ 'en', 'ru' ];
    currentLang: string;

    constructor(
        public dialog: MatDialog,
        private homeworkService: HomeworkService,
        private alertService: AlertService,
        private authenticationService: AuthenticationService,
        private translateService: TranslateService
    ) {}

    ngOnInit() {
        this.currentLang = this.translateService.currentLang;
    }
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

    switchLanguage(lang: string) {
        this.translateService.use(lang);
        this.currentLang = this.translateService.currentLang;
        localStorage.setItem('lang', lang);
    }
}
