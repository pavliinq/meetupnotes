import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPokojComponent } from './lista-pokoj.component';

describe('ListaPokojComponent', () => {
  let component: ListaPokojComponent;
  let fixture: ComponentFixture<ListaPokojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPokojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPokojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
