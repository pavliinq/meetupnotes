import { TestBed, inject } from '@angular/core/testing';

import { PokojService } from './pokoj.service';

describe('PokojService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokojService]
    });
  });

  it('should be created', inject([PokojService], (service: PokojService) => {
    expect(service).toBeTruthy();
  }));
});
