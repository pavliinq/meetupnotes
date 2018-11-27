import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PytanieProwadzacyComponent } from './pytanie-prowadzacy.component';

describe('PytanieProwadzacyComponent', () => {
  let component: PytanieProwadzacyComponent;
  let fixture: ComponentFixture<PytanieProwadzacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PytanieProwadzacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PytanieProwadzacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
