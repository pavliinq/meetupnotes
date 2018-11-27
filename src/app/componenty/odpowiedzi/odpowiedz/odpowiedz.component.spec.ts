import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdpowiedzComponent } from './odpowiedz.component';

describe('OdpowiedzComponent', () => {
  let component: OdpowiedzComponent;
  let fixture: ComponentFixture<OdpowiedzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdpowiedzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdpowiedzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
