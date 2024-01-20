import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenSegmentNumberComponent } from './seven-segment-number.component';

describe('SevenSegmentNumberComponent', () => {
  let component: SevenSegmentNumberComponent;
  let fixture: ComponentFixture<SevenSegmentNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SevenSegmentNumberComponent]
    });
    fixture = TestBed.createComponent(SevenSegmentNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
