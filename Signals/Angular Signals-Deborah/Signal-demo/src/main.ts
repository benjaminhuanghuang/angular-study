import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <h1>Angular Signals</h1>
  <div>{{quantity()}}</div>
  <select [ngModel]="quantity()"
    (change)="onQuantitySeLected ($any($event.target).value)">
    <option disabled value="">--Select a quantity--</option>
    <option *ngFor="let q of qtyAvailable()">{{ q }}</option>
  </select>
  <div>Vehicle: {{selectedVehicle().name}}</div>
  <div>Price: {{selectedVehicle().price|number:'1.2-2'}}</div>

  <div style="font-weight:bold">Total: {{exPrice()|number:'1.2-2'}}</div>
  `
})
export class App {
  name = 'Angular';
  quantity = signal(1);
  qtyAvailable = signal([1, 2, 3, 4, 5, 6]);

  selectedVehicle = signal<Vehicle>({ id: 1, name: "ABC123", price: 1000 });
  vehicles = signal<Vehicle[]>([]);
  exPrice = computed(() => this.selectedVehicle().price * this.quantity());

  constructor() {
    console.log(this.quantity());
    // update
    this.quantity.update(curr => curr + 1);
  }

  onQuantitySeLected(qty: number) {
    this.quantity.set(qty);

    //this.quantity.set(100);
    //this.quantity.set(2000);   // effect will retrieve the most recent value
  }

  // for debugging
  qtyEffect = effect(() => console.group("Latest quantity:", this.quantity()))
}

bootstrapApplication(App);


export interface Vehicle {
  id: number,
  name: string,
  price: number
}
