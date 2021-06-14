import { TestBed } from '@angular/core/testing';

import { ValidUserGuard } from './valid-user.guard';

describe('ValidUserGuard', () => {
  let guard: ValidUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
