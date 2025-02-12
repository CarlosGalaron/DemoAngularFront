import { TestBed } from '@angular/core/testing';

import { EmpleService } from './emple.service';

describe('EmpleService', () => {
  let service: EmpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
