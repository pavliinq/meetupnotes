import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PytanieComponent } from './pytanie.component';

describe('PytanieComponent', () => {
  let component: PytanieComponent;
  let fixture: ComponentFixture<PytanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PytanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PytanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
