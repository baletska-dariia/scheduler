import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkTableComponent } from './homework-table.component';

describe('HomeworkTableComponent', () => {
  let component: HomeworkTableComponent;
  let fixture: ComponentFixture<HomeworkTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
