import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OdpowiedzListaComponent } from './odpowiedz-lista.component';

describe('OdpowiedzListaComponent', () => {
  let component: OdpowiedzListaComponent;
  let fixture: ComponentFixture<OdpowiedzListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OdpowiedzListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OdpowiedzListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
