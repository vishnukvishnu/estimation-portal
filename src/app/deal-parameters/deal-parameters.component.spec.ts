import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealParametersComponent } from './deal-parameters.component';

describe('DealParametersComponent', () => {
  let component: DealParametersComponent;
  let fixture: ComponentFixture<DealParametersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealParametersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
