import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Browse5Component } from './browse5.component';

describe('Browse5Component', () => {
  let component: Browse5Component;
  let fixture: ComponentFixture<Browse5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Browse5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Browse5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
