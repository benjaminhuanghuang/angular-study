import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberDisplayTestComponent } from './number-display-test.component';

describe('NumberDisplayTestComponent', () => {
  let component: NumberDisplayTestComponent;
  let fixture: ComponentFixture<NumberDisplayTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NumberDisplayTestComponent]
    });
    fixture = TestBed.createComponent(NumberDisplayTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
