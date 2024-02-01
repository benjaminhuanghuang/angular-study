/*
    Multicasting is a way of sending data from a single source to multiple subscribers in a single execution.
    ---- new interval 0
    subscribe 1:  0
    subscribe 2: 0
    ---- new interval 1
    subscribe 1:  1
    subscribe 2: 1

    In version 7, the multicasting APIs were simplified to just a few functions:

    connectable
    connect
    share
*/

const { interval, tap , Subject} = require("rxjs");
const { multicast} = require("rxjs/operators");

const observer = {
  next: (value) => console.log("next", value),
  error: (err) => console.error("error", err),
  complete: () => console.log("complete"),
};

const interval$ = interval(1000).pipe(
    tap(value => console.log('---- new interval', value))
)

// return a connectable observable
const multicastInterval$ = interval$.pipe(
    multicast(new Subject())
)

const connectedSub = multicastInterval$.connect();

const sub1 = multicastInterval$.subscribe(value => console.log('subscribe 1: ', value));
const sub2 = multicastInterval$.subscribe(value => console.log('subscribe 2:', value));

// After unsubscribe, the interval$ is still running
setTimeout(() => {
    sub1.unsubscribe();
    sub2.unsubscribe();
}, 3000);

// Need to unsubscribe the connectable observable
setTimeout(() => {
    connectedSub.unsubscribe();
}, 5000);
