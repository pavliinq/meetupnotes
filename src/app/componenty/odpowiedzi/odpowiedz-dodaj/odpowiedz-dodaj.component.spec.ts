import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdpowiedzDodajComponent } from './odpowiedz-dodaj.component';

describe('OdpowiedzDodajComponent', () => {
  let component: OdpowiedzDodajComponent;
  let fixture: ComponentFixture<OdpowiedzDodajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdpowiedzDodajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdpowiedzDodajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
