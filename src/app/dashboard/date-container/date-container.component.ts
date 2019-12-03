import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-date-container',
    templateUrl: './date-container.component.html',
    styleUrls: ['./date-container.component.scss'],
})
export class DateContainerComponent implements OnInit {
    private currentDay: string;
    private currentDate: string;
    constructor() {}

    ngOnInit() {
        this.currentDay = moment().format('dddd');
        this.currentDate = moment().format('MMM Do YY');
    }
}
