import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularDigitComponent } from '../regular-digit/regular-digit.component';

@Component({
  selector: 'app-regular-number',
  standalone: true,
  imports: [CommonModule, RegularDigitComponent],
  templateUrl: './regular-number.component.html',
  styleUrls: ['./regular-number.component.scss']
})
export class RegularNumberComponent {
  _number = signal(0);

  @Input() set number(value: number) {
    this._number.set(value);
  }

  // computed know the dependencies and will recompute when they change
  first = computed(() => Math.floor(this._number() % 10));
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
