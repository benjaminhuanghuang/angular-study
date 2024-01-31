/*
    In this demo, we can see each subscription has its own interval$ separately
    'new interval' is displayed twice 

    ---- new interval 0
    subscribe 1: 0
    ---- new interval 0
    subscribe 2: 0
*/

const { interval, tap } = require("rxjs");

const observer = {
  next: (value) => console.log("next", value),
  error: (err) => console.error("error", err),
  complete: () => console.log("complete"),
};

const interval$ = interval(1000).pipe(
  tap((value) => console.log("---- new interval", value))
);

interval$.subscribe((value) => console.log("subscribe 1: ", value));
interval$.subscribe((value) => console.log("subscribe 2: ", value));
