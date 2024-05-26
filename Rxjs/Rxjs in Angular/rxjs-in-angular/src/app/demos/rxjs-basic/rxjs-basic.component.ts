import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-basic',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-basic.component.html',
  styleUrl: './rxjs-basic.component.css'
})
export class RxjsBasicComponent {
  ngOnInit() {
    this.createObservable();
  }

  createObservable() {
    const observable = new Observable(observer => {
      observer.next('1');
      observer.next('2');
      observer.error('Error message');
      observer.next('3');
      observer.complete();
    });

    // Explicit observer object:
    // const observer = { }
    // observable.subscribe(observer);

    observable.subscribe({
      next: value => console.log(value),
      error: error => console.error(error),
      complete: () => console.log('Observable is complete')
    });
  }
}
