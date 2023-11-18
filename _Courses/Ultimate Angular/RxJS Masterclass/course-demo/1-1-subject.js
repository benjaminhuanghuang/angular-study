import { Subject, interval } from "rxjs";

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete!"),
};

const subject = new Subject();

const subscription = subject.subscribe(observer);

subject.next("1");

// this subscription will not receive the value "1", because it was emitted before the subscription was created
const subscription2 = subject.subscribe(observer);
subject.next("2");
