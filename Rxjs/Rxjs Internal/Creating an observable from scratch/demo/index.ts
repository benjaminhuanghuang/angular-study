
interface Observer<T> {
  next(value: T): void;
  error(err: any): void;
  complete(): void;
}

function myObservable(observer: Observer<number>) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
}
// subscribe to the observable
const myObserver = {
  next: (value: number) => console.log(value),
  error: (err: any) => console.error(err),
  complete: () => console.log('complete')
};
