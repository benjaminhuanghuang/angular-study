import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-counter',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-counter.component.html',
  styleUrl: './rxjs-counter.component.css'
})
export class RxjsCounterComponent {
  ngOnInit() {
    this.createObservable();
  }

  createObservable() {
    const observable = new Observable(subscriber => {
      let count = 0;
      const interval = setInterval(() => {
        subscriber.next(count++);   // output
        if (count === 10) {
          subscriber.complete();
        }
      }, 1000);

      setTimeout(() => {
        subscriber.error('Error message!!');
      }, 5000);

      // Cleanup function
      return () => {
        clearInterval(interval);
      };
    });


    const sub = observable.subscribe({
      next: value => console.log(value),
      error: error => console.error(error),
      complete: () => console.log('Observable is complete')
    });

    setTimeout(() => {
      console.log('Unsubscribing');
      sub.unsubscribe();
    }, 8000);
  }
}
