import { interval, of, merge, map } from 'rxjs';

const interval1$ = interval(1000);
const interval2$ = interval1$.pipe(
    map(val => val *10)
);

const result$ = merge(interval1$, interval2$);

result$.subscribe(console.log);