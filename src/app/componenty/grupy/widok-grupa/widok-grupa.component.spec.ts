import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidokGrupaComponent } from './widok-grupa.component';

describe('WidokGrupaComponent', () => {
  let component: WidokGrupaComponent;
  let fixture: ComponentFixture<WidokGrupaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidokGrupaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidokGrupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
