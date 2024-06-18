import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from './store/store.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, StoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SportsStore';
}
