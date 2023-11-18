import { Subject, interval } from "rxjs";
import { tap } from "rxjs/operators";

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete!"),
};

const subject = new Subject();
subject.subscribe(observer);
subject.subscribe(observer);

const interval$ = interval(1000).pipe(
  tap((value) => console.log("new interval", value)) // new interval will be displayed once
);

interval$.subscribe(subject);
