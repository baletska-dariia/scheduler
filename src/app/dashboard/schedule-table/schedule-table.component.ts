import { Component, OnInit, Input } from '@angular/core';

export interface ScheduleElement {
  number: number;
  room: number;
  subject: string;
  start: string;
  end: string;
}

const ELEMENT_DATA: ScheduleElement[] = [
  {
    number: 1,
    room: 234,
    subject: 'OOP',
    start: `${new Date()}`,
    end: `${new Date()}`
  },
  {
    number: 2,
    room: 104,
    subject: 'Functional Programming',
    start: `${new Date()}`,
    end: `${new Date()}`
  },
  {
    number: 3,
    room: 411,
    subject: 'SQL and Databases',
    start: `${new Date()}`,
    end: `${new Date()}`
  }
];

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.scss']
})
export class ScheduleTableComponent implements OnInit {
  displayedColumns = ['number', 'room', 'subject', 'start', 'end'];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}
}
