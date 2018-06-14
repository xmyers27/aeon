import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Browse3Component } from './browse3.component';

describe('Browse3Component', () => {
  let component: Browse3Component;
  let fixture: ComponentFixture<Browse3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Browse3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Browse3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
