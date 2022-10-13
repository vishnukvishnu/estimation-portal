import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianTableComponent } from './accordian-table.component';

describe('AccordianTableComponent', () => {
  let component: AccordianTableComponent;
  let fixture: ComponentFixture<AccordianTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordianTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
