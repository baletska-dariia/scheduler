import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
export interface HomeworkElement {
  number: number;
  subject: string;
  homework: string;
  deadline: string;
}

const ELEMENT_DATA: HomeworkElement[] = [
  {
    number: 1,
    subject: 'Project Approach to Software Development',
    homework: 'Implement Angular Components',
    deadline: `${new Date(2019, 10, 5)}`
  },
  {
    number: 2,
    subject: 'OOP',
    homework: 'Study about Inheritance',
    deadline: `${new Date(2019, 11, 5)}`
  },
  {
    number: 3,
    subject: 'Python',
    homework: 'Study basic machine learning concepts',
    deadline: `${new Date()}`
  },
  {
    number: 1,
    subject: 'Project Approach to Software Development',
    homework: 'Implement Angular Components',
    deadline: `${new Date()}`
  },
  {
    number: 2,
    subject: 'OOP',
    homework: 'Study about Inheritance',
    deadline: `${new Date()}`
  },
  {
    number: 3,
    subject: 'Python',
    homework: 'Study basic machine learning concepts',
    deadline: `${new Date()}`
  },
  {
    number: 1,
    subject: 'Project Approach to Software Development',
    homework: 'Implement Angular Components',
    deadline: `${new Date()}`
  },
  {
    number: 2,
    subject: 'OOP',
    homework: 'Study about Inheritance',
    deadline: `${new Date()}`
  },
  {
    number: 3,
    subject: 'Python',
    homework: 'Study basic machine learning concepts',
    deadline: `${new Date()}`
  },
  {
    number: 1,
    subject: 'Project Approach to Software Development',
    homework: 'Implement Angular Components',
    deadline: `${new Date()}`
  },
  {
    number: 2,
    subject: 'OOP',
    homework: 'Study about Inheritance',
    deadline: `${new Date()}`
  },
  {
    number: 3,
    subject: 'Python',
    homework: 'Study basic machine learning concepts',
    deadline: `${new Date()}`
  }
];

@Component({
  selector: 'app-homework-table',
  templateUrl: './homework-table.component.html',
  styleUrls: ['./homework-table.component.scss']
})
export class HomeworkTableComponent implements OnInit {
  displayedColumns = ['number', 'subject', 'homework', 'deadline', 'select'];
  dataSource = new MatTableDataSource<HomeworkElement>(ELEMENT_DATA);

  constructor() {}

  ngOnInit() {}

  addHomework() {
    ELEMENT_DATA.push({
      number: 4,
      subject: 'New subject',
      homework: 'some homework',
      deadline: `${new Date()}`
    });
    this.dataSource._updateChangeSubscription();
  }
}
