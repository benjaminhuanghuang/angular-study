import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//
import { Observable } from 'rxjs';
//
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private apiService: ApiService,
    private cdr: ChangeDetectorRef) {
  }

  // An array to store the output messages
  outputs: { time: string, message: string }[] = [];

  // Triggers when the component is initialized
  ngOnInit() {

  }
}
