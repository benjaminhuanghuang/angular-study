import { BehaviorSubject, interval } from "rxjs";

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete!"),
};

const subject = new BehaviorSubject(-100);

// this subscription will receive the default value "-100"
const subscription = subject.subscribe(observer);

subject.next("1");

// this subscription will receive the last value "1"
const subscription2 = subject.subscribe(observer);

subject.next("2");
// 2 subscription will receive the last value "2"
