import { Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SevenSegmentDigitComponent } from '../seven-segment-digit/seven-segment-digit.component';

@Component({
  selector: 'app-seven-segment-number',
  standalone: true,
  imports: [CommonModule, SevenSegmentDigitComponent],
  templateUrl: './seven-segment-number.component.html',
  styleUrls: ['./seven-segment-number.component.scss']
})
export class SevenSegmentNumberComponent {
  _number = signal(0);

  @Input() set number(value: number) {
    this._number.set(value);
  }

  // computed know the dependencies and will recompute when they change
  first = computed(() => this._number() % 10);
  second = computed(() => this.getDigit(1));
  third = computed(() => this.getDigit(2));
  fourth = computed(() => this.getDigit(3));


  /**
  * Gets the digit on the given index (zero-based) from {@link _number}
  *
  * @returns -1 if the digit is not available (e.g. digit with index 2 of 12)
  */
  private getDigit(index: number): number {
    return this._number() / Math.pow(10, index) < 1 ? -1 : Math.floor(this._number() / Math.pow(10, index)) % 10;
  }
}
