import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regular-digit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regular-digit.component.html',
  styleUrls: ['./regular-digit.component.scss']
})
export class RegularDigitComponent {
  /** Signal for digit; -1 means that the signal should not be displayed */
  _digit = signal<number>(-1);

  @Input() set digit(value: number) {
    this._digit.set(value);
  }
}
