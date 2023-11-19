import { AsyncSubject } from "rxjs";

/*
The subscriber only receive the last value of the Observable only when the Observable completes.
*/
const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete!"),
};
const subject = new AsyncSubject();
subject.subscribe(observer);
subject.subscribe(observer);
subject.next("1");
subject.next("2");
subject.next("3");

console.log("before complete, no value is emitted");
// No value is emitted until the subject completes
subject.complete();
