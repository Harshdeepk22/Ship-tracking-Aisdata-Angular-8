import { TestBed } from '@angular/core/testing';

import { AisdataService } from './aisdata.service';

describe('AisdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AisdataService = TestBed.get(AisdataService);
    expect(service).toBeTruthy();
  });
});
