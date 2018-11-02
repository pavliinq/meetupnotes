import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajPokojComponent } from './dodaj-pokoj.component';

describe('DodajPokojComponent', () => {
  let component: DodajPokojComponent;
  let fixture: ComponentFixture<DodajPokojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajPokojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajPokojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
