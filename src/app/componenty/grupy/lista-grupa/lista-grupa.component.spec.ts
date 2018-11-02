import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGrupaComponent } from './lista-grupa.component';

describe('ListaGrupaComponent', () => {
  let component: ListaGrupaComponent;
  let fixture: ComponentFixture<ListaGrupaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaGrupaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaGrupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
