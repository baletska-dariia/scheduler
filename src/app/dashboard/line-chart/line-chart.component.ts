import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  constructor(private translateService: TranslateService) {

  }
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public chartColors: Array<any> = [
    {
      backgroundColor: '#DCEBF4'
    }
  ];
  private lineChartLabelsEn = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];
  private lineChartLabelsRu = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница'
  ];
  private labelEn = 'Lectures';
  private labelRu = 'Лекции';

  public lineCharLabels = null;

  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [{ data: [3, 2, 4, 5, 3], label: 'Lectures' }];

  ngOnInit() {
    this.translateService.onLangChange.subscribe((lang: LangChangeEvent) => {
      switch (lang.lang) {
        case 'en': this.lineCharLabels = this.lineChartLabelsEn; this.lineChartData[0].label = this.labelEn; break;
        case 'ru': this.lineCharLabels = this.lineChartLabelsRu; this.lineChartData[0].label = this.labelRu; break;
      }
  });
  }
}
