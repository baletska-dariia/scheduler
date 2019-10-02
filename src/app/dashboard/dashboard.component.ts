import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeworkTableComponent } from './homework-table/homework-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('homeworkTable', { static: false })
  homeworkTable: HomeworkTableComponent;
  constructor() {}

  ngOnInit() {}
}
