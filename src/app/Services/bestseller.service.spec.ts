import { TestBed } from '@angular/core/testing';

import { BestsellerService } from './bestseller.service';

describe('BestsellerService', () => {
  let service: BestsellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestsellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
