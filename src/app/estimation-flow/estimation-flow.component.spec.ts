import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationFlowComponent } from './estimation-flow.component';

describe('EstimationFlowComponent', () => {
  let component: EstimationFlowComponent;
  let fixture: ComponentFixture<EstimationFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimationFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimationFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
