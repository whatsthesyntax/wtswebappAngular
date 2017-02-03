/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminformComponent } from './adminform.component';

describe('AdminformComponent', () => {
  let component: AdminformComponent;
  let fixture: ComponentFixture<AdminformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
