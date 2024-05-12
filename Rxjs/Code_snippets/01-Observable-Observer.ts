import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  let count = 0;
  const interval = setInterval(() => {
    subscriber.next(count++);
    if (count === 10) {
      subscriber.complete();
    }
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(interval);
  };
});


// Explicit observer object
const observer = {
  next: (value: any) => {
    console.log(value);
  },
  error: (error: any) => {
    console.error(error);
  },
  complete: () => {
    console.log('Complete');
  },
};

// Subscribe to the observable
observable.subscribe(observer);

// Inline methods (deprecated)
observable.subscribe(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.error(error);
  },
  () => {
    console.log('Complete');
  }
);
