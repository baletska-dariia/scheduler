import { Component, OnInit } from '@angular/core';
import { HomeworkService } from 'src/app/services/homework.service';
import { first } from 'rxjs/operators';
import { AlertService } from 'src/app/services';

export interface HomeworkElement {
    id: string;
    title: string;
    homework: string;
    deadline: string;
}

@Component({
    selector: 'app-homework-table',
    templateUrl: './homework-table.component.html',
    styleUrls: ['./homework-table.component.scss'],
})
export class HomeworkTableComponent implements OnInit {
    displayedColumns = ['number', 'subject', 'homework', 'deadline', 'select'];
    dataSource: any;
    tableData: Array<any>;
    constructor(
        private homeworkService: HomeworkService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.getHomeworks().subscribe(
            data => {
                this.dataSource = data;
                // console.log(subjects);
                this.alertService.success('Subjects succesfully fetched', true);
            },
            error => {
                this.alertService.error(error);
            }
        );
    }
    getHomeworks() {
        return this.homeworkService.getHomeworks().pipe(first());
    }
    // addHomework(homework: HomeworkElement) {
    //     this.homeworkService
    //         .addHomework(homework)
    //         .pipe(first())
    //         .subscribe(
    //             data => {
    //                 this.alertService.success('Homework is added', true);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //             }
    //         );
    //     // ELEMENT_DATA.push({
    //     //     id: '2',
    //     //     title: 'title',
    //     //     homework: 'homework',
    //     //     deadline: 'today',
    //     // });
    //     // this.dataSource._updateChangeSubscription();
    // }
}
