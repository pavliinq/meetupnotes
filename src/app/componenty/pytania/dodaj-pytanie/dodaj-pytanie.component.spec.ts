import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajPytanieComponent } from './dodaj-pytanie.component';

describe('DodajPytanieComponent', () => {
  let component: DodajPytanieComponent;
  let fixture: ComponentFixture<DodajPytanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajPytanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajPytanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
