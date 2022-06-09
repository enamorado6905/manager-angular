import { TestBed } from '@angular/core/testing';

import { AuthmanagementService } from './authmanagement.service';

describe('AuthmanagementService', () => {
  let service: AuthmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
