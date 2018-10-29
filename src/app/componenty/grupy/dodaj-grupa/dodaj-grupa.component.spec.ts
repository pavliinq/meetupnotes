import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajGrupaComponent } from './dodaj-grupa.component';

describe('DodajGrupaComponent', () => {
  let component: DodajGrupaComponent;
  let fixture: ComponentFixture<DodajGrupaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajGrupaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajGrupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
