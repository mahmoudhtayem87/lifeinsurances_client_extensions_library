import { TestBed } from '@angular/core/testing';

import { VehiclesDataService } from './vehicles-data.service';

describe('VehiclesDataService', () => {
  let service: VehiclesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
