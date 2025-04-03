import { TestBed } from '@angular/core/testing';

import { PokeMonService } from './poke-mon.service';

describe('PokeMonService', () => {
  let service: PokeMonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeMonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
