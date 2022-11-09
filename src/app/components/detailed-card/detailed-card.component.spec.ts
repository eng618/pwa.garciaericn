import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, waitForAsync } from '@angular/core/testing';

import { DetailedCardComponent } from './detailed-card.component';

describe('DetailedCardComponent', () => {
  let component: DetailedCardComponent;
  let fixture: ComponentFixture<DetailedCardComponent>;

  beforeEach(() => {
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
