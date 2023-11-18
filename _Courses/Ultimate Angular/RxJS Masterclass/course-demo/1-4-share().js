import { Subject, interval, multicast } from "rxjs";
import { share, tap } from "rxjs/operators";

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete!"),
};

const interval$ = interval(1000).pipe(
  tap((value) => console.log("new interval", value))
);

const multicastedInterval$ = interval$.pipe(
  share() // share() is the same as multicast(() => new Subject())
);

const subOne = multicastedInterval$.subscribe(observer);
const subTwo = multicastedInterval$.subscribe(observer);

setTimeout(() => {
  subOne.unsubscribe();
  subTwo.unsubscribe();
}, 3000);
