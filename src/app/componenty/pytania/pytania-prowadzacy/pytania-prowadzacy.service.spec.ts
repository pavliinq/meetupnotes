import { TestBed, inject } from '@angular/core/testing';

import { PytaniaProwadzacyService } from './pytania-prowadzacy.service';

describe('PytaniaProwadzacyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PytaniaProwadzacyService]
    });
  });

  it('should be created', inject([PytaniaProwadzacyService], (service: PytaniaProwadzacyService) => {
    expect(service).toBeTruthy();
  }));
});
