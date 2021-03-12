import { TestBed } from '@angular/core/testing';

import { RentalcarService } from './rentalcar.service';

describe('RentalcarService', () => {
  let service: RentalcarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalcarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
