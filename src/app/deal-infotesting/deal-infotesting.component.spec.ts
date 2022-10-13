import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealInfotestingComponent } from './deal-infotesting.component';

describe('DealInfotestingComponent', () => {
  let component: DealInfotestingComponent;
  let fixture: ComponentFixture<DealInfotestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealInfotestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealInfotestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
