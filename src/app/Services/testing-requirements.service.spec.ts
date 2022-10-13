import { TestBed } from '@angular/core/testing';

import { TestingRequirementsService } from './testing-requirements.service';

describe('TestingRequirementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestingRequirementsService = TestBed.get(TestingRequirementsService);
    expect(service).toBeTruthy();
  });
});
