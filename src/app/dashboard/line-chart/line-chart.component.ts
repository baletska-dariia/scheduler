import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public chartColors: Array<any> = [
    {
      backgroundColor: '#DCEBF4'
    }
  ];
  public lineChartLabels = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [{ data: [3, 2, 4, 5, 3], label: 'Lectures' }];
  ngOnInit() {}
}
