import { TestBed } from '@angular/core/testing';

import { AccordianTableService } from './accordian-table.service';

describe('AccordianTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccordianTableService = TestBed.get(AccordianTableService);
    expect(service).toBeTruthy();
  });
});
