import { TestBed } from '@angular/core/testing';

import { DealInfotestingService } from './deal-infotesting.service';

describe('DealInfotestingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DealInfotestingService = TestBed.get(DealInfotestingService);
    expect(service).toBeTruthy();
  });
});
