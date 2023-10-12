import { Component } from '@angular/core';
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

}
