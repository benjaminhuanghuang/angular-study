import { Component } from '@angular/core';
import { Observable, map, mergeMap, of, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs-random-delay',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-random-delay.component.html',
  styleUrl: './rxjs-random-delay.component.css'
})
export class RxjsRandomDelayComponent {
  ngOnInit() {
    this.createObservable();
  }

  // Simulate a function that fetches user data from a server with a random delay
  fetchUserData(userId: string) {
    return timer(Math.random() * 1000).pipe(
      map(() => {
        return { userId };
      })
    );
  }
  createObservable() {
    of('1', '2', '3', '4', '5').pipe(
      mergeMap((userId: string) => this.fetchUserData(userId))
    ).subscribe(data => console.log(data));
  }
}
