import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZapiszComponent } from './zapisz.component';

describe('ZapiszComponent', () => {
  let component: ZapiszComponent;
  let fixture: ComponentFixture<ZapiszComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZapiszComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZapiszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
