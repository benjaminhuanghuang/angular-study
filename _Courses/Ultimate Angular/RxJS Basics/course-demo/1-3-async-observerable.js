import { Observable } from "rxjs";

// The Observable constructor takes a single argument, the subscriber function.
// In subscriber function, you decide what values will be sent to observers.
const observable = new Observable((subscriber) => {
  let count = 0;
  const id = setInterval(() => {
    subscriber.next(count++);
    if (count > 5) {
      subscriber.complete();
    }
  }, 1000);

  // return a function to clean up resources when the observable completes.
  return () => {
    console.log("called");
    clearInterval(id);
  };
});

// accept a function as observer.
observable.subscribe(
  value => console.log("next:", value)
);
