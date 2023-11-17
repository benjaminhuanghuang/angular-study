import { Observable } from "rxjs";

const observer = {
  next: (value) => console.log("next:", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete!"),
};

// The Observable constructor takes a single argument, the subscriber function.
// In subscriber function, you decide what values will be sent to observers.
const observable = new Observable((subscriber) => {
  subscriber.next("Hello");
  subscriber.next("World");
  subscriber.complete();
  subscriber.next("This will be ignored");
});

observable.subscribe(
  // observer here
  observer
);
