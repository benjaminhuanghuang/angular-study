import { Observable } from "rxjs";

const partialObserver = {
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

// accept a function as observer.
observable.subscribe(
  value => console.log("next:", value)
);
