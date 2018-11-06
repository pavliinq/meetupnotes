import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPytanieComponent } from './lista-pytanie.component';

describe('ListaPytanieComponent', () => {
  let component: ListaPytanieComponent;
  let fixture: ComponentFixture<ListaPytanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPytanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPytanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
