import { Subject, interval, multicast } from "rxjs";
import { tap } from "rxjs/operators";

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete!"),
};

const interval$ = interval(1000).pipe(
  tap((value) => console.log("new interval", value))
);
/*
  Will be removed in v8. Use the connectable observable, the connect operator or the share operator instead. 
*/
const multicastedInterval$ = interval$.pipe(multicast(() => new Subject()));
const connetedSub = multicastedInterval$.connect();

const subOne = multicastedInterval$.subscribe(observer);
const subTwo = multicastedInterval$.subscribe(observer);

// the multicastedInterval$.connect(); still runs
// setTimeout(() => {
//   subOne.unsubscribe();
//   subTwo.unsubscribe();
// }, 3000);

setTimeout(() => {
  connetedSub.unsubscribe();
}, 3000);
