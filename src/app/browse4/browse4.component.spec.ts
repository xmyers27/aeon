import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Browse4Component } from './browse4.component';

describe('Browse4Component', () => {
  let component: Browse4Component;
  let fixture: ComponentFixture<Browse4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Browse4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Browse4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
