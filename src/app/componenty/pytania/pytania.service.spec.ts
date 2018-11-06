import { TestBed, inject } from '@angular/core/testing';

import { PytaniaService } from './pytania.service';

describe('PytaniaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PytaniaService]
    });
  });

  it('should be created', inject([PytaniaService], (service: PytaniaService) => {
    expect(service).toBeTruthy();
  }));
});
