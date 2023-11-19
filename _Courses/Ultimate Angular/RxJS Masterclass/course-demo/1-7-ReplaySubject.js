import { ReplaySubject, Subject } from "rxjs";
import { distinctUntilKeyChanged, map, scan } from "rxjs/operators";

/*
  When a new subscriber subscribes to a ReplaySubject, it will receive a number of values from the past, specified by the buffer size.
*/

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete!"),
};

const subject = new ReplaySubject(2);

subject.next("1");
subject.next("2");
subject.next("3");
subject.next("4");

// this subscriber will receive the 2 values "3" and "4" emitted before it subscribed
subject.subscribe(observer);
