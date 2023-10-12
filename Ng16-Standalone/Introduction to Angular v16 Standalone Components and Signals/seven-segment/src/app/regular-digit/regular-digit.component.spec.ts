import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularDigitComponent } from './regular-digit.component';

describe('RegularDigitComponent', () => {
  let component: RegularDigitComponent;
  let fixture: ComponentFixture<RegularDigitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RegularDigitComponent]
    });
    fixture = TestBed.createComponent(RegularDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
