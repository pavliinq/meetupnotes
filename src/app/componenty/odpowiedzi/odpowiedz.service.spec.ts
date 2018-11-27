import { TestBed, inject } from '@angular/core/testing';

import { OdpowiedzService } from './odpowiedz.service';

describe('OdpowiedzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OdpowiedzService]
    });
  });

  it('should be created', inject([OdpowiedzService], (service: OdpowiedzService) => {
    expect(service).toBeTruthy();
  }));
});
