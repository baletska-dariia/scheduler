import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
    selector: 'app-date-container',
    templateUrl: './date-container.component.html',
    styleUrls: ['./date-container.component.scss'],
})
export class DateContainerComponent implements OnInit {
    private currentDay: string;
    private currentDate: string;
    constructor(private translateService: TranslateService) {}

    ngOnInit() {
        this.translateService.onLangChange.subscribe((lang: LangChangeEvent) => {
            this.currentDay = moment().locale(lang.lang).format('dddd');
            this.currentDate = moment().locale(lang.lang).format('MMM Do YY');
        });
    }
}
