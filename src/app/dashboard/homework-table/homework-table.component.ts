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
  selection = new SelectionModel<HomeworkElement>(true, []);
  constructor() {}

  ngOnInit() {}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: HomeworkElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${
      this.selection.isSelected(row) ? 'deselect' : 'select'
    } row ${row.number + 1}`;
  }
}
