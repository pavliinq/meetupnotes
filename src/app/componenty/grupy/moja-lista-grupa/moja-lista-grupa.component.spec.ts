import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojaListaGrupaComponent } from './moja-lista-grupa.component';

describe('MojaListaGrupaComponent', () => {
  let component: MojaListaGrupaComponent;
  let fixture: ComponentFixture<MojaListaGrupaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojaListaGrupaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojaListaGrupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
