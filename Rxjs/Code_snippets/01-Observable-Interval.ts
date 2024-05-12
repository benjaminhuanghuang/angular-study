import { Observable } from 'rxjs';

function AsyncStream(observer: any) {
  const interval = setInterval(() => {
    observer.next(Math.random());
  }, 1000);

  // Cleanup function
  return () => {
    clearInterval(interval);
  };
}

Observable.create(AsyncStream).subscribe(val => console.log(val));
