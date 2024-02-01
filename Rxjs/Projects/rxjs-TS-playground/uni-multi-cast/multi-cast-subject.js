/*
    In this demo, we convert interval to a subject 

    subject is a observer, it has next(), error(), complete() methods

    'new interval' is displayed only once
*/

import { interval, tap , Subject} from "rxjs";

const interval$ = interval(1000).pipe(
    tap(value => console.log('---- new interval', value))
)

const subject$ = new Subject();
// use subject$ as an observer
interval$.subscribe(subject$);

subject$.subscribe(value => console.log('subscribe 1', value));
subject$.subscribe(value => console.log('subscribe 2', value));
