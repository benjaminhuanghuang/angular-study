import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularNumberComponent } from '../regular-number/regular-number.component';

@Component({
  selector: 'app-number-display-test',
  standalone: true,
  imports: [CommonModule, RegularNumberComponent],
  templateUrl: './number-display-test.component.html',
  styleUrls: ['./number-display-test.component.scss']
})
export class NumberDisplayTestComponent {

}
