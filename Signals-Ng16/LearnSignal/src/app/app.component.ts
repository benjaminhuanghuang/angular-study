import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = signal(0);
  numbers = signal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);



  increment() {
    this.counter.update(curr => curr + 1);
  }

  reset() {
    this.counter.set(0);
  }

  modifyArray() {
    this.numbers.update(curr => {
      curr[0] = 10;
      return curr;
    });

    // update in place
    this.numbers.mutate(val => {
      val[0] = 10;
    });

    // update in place
    this.numbers.update(curr => {
      curr.push(10);
      return curr;
    });
  }
}
