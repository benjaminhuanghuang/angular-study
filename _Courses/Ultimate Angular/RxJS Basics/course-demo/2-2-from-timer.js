import { interval, timer } from "rxjs";

const observer = {
  next: (value) => console.log(value),
};


const interval$ = interval(1000);
const timer$ = timer(1000, 3000);  // emit 0,1,2 after 1 second, then every 3 seconds

interval$.subscribe(observer);
