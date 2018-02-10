/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BrazilianComponent } from './brazilian.component';

describe('BrazilianComponent', () => {
  let component: BrazilianComponent;
  let fixture: ComponentFixture<BrazilianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrazilianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrazilianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
