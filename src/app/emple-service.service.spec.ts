import { TestBed } from '@angular/core/testing';

import { EmpleServiceService } from './emple-service.service';

describe('EmpleServiceService', () => {
  let service: EmpleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
