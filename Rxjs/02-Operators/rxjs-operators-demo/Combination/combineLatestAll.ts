/*

When source observable completes use combineLatest with collected observables

*/
import { interval } from 'rxjs';
import { take, map, combineLatestAll } from 'rxjs/operators';

// emit every 1s, take 2
const source$ = interval(1000).pipe(take(2));

// map each emitted value from source to interval observable that takes 5 values
const example$ = source$.pipe(
  map(val =>
    interval(1000).pipe(
      map(i => `Result (${val}): ${i}`),
      take(5)
    )
  )
);

example$
  .pipe(combineLatestAll())
  .subscribe(console.log);
