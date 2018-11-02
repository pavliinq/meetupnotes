import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSlowoComponent } from './lista-slowo.component';

describe('ListaSlowoComponent', () => {
  let component: ListaSlowoComponent;
  let fixture: ComponentFixture<ListaSlowoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSlowoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSlowoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
