const { interval, Observable, timer } = require("rxjs");

// get a observable specifies what values is being emitted over time
const interval$ = interval(1000);

interval$.subscribe((value) => {
    console.log(`stream 1: ${value}`);
});

// wait 3 seconds before start emitting values
const interval2$ = timer(3000, 1000);

interval2$.subscribe((value) => {
    console.log(`stream 2: ${value}`);
});
