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
const subscription = observable.subscribe((value) =>
  console.log("next:", value)
);


const subscription2 = observable.subscribe((value) =>
  console.log("next2:", value)
);

// unsubscribe from multiple subscriptions 
subscription.add(subscription2);

setTimeout(() => {
  subscription.unsubscribe();   // unsubscribe after 3 seconds, only 2 values will be printed.
}, 3000);
