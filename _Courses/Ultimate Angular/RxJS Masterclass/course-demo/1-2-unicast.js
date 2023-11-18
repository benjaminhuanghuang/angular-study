import { interval } from "rxjs";
import { tap } from "rxjs/operators";

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete!"),
};

const interval$ = interval(1000).pipe(
  tap((value) => console.log("new interval", value)) // new interval will be displayed with each subscription
);

interval$.subscribe(observer);
interval$.subscribe(observer);
