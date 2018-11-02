import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokojWidokComponent } from './pokoj-widok.component';

describe('PokojWidokComponent', () => {
  let component: PokojWidokComponent;
  let fixture: ComponentFixture<PokojWidokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokojWidokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokojWidokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
