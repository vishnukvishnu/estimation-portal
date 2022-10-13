import { TestBed } from '@angular/core/testing';

import { EstimationFlowService } from './estimation-flow.service';

describe('EstimationFlowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstimationFlowService = TestBed.get(EstimationFlowService);
    expect(service).toBeTruthy();
  });
});
