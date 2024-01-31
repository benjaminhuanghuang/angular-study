const { Observable } = require("rxjs");
const { publish, share, tap } = require("rxjs/operators");

const observer = {
  next: (v) => console.log("next: " + v),
  error: (err) => console.error("error " + err),
  complete: () => console.log("complete"),
}


const subject = new Subject();

const interval$ = interval(1000).pipe(
  tap((v) => console.log("new interval value: " + v)),
);

interval$.subscribe(subject);

const sub1 = subject.subscribe(observer);
const sub2 = subject.subscribe(observer);
