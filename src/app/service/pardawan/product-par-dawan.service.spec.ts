import { TestBed } from '@angular/core/testing';

import { ProductParDawanService } from './product-par-dawan.service';

describe('ProductParDawanService', () => {
  let service: ProductParDawanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductParDawanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
