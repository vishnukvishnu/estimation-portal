import { TestBed } from '@angular/core/testing';

import { DealParametersService } from './deal-parameters.service';

describe('DealParametersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DealParametersService = TestBed.get(DealParametersService);
    expect(service).toBeTruthy();
  });
});
