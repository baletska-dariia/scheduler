import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateContainerComponent } from './date-container.component';

describe('DateContainerComponent', () => {
  let component: DateContainerComponent;
  let fixture: ComponentFixture<DateContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
