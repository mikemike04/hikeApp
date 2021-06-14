import { TestBed } from '@angular/core/testing';

import { ValidatorService } from './validator-service.service';

describe('ValidatorServiceService', () => {
  let service: ValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
