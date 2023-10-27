## Subject
Subjects are observables and observers at the same time. 

Subject is like EventEmitter. When an event is emitted, the subject notifies all the listeners.

We can subscribe to them and we can emit values to them. 
We can also use them as event emitters.


## Use subjects for cross component communication. 
```ts
import{ Injectable } from
import { Subject } from "rxjs";

@Injectable()
export class DataService{
  dataEmitter = new Subject<string>();
  
  raiseDataEmitterEvent (data: string){
    this. dataEmitter.next(data);
  }
}
```

## BehaviorSubject
Has a default value. 

```ts
import { BehaviorSubject } from 'rxjs' ;

const bs$ = new BehaviorSubject( 1 );

// BehaviorSubject we don’t need to call the next() method. 
// When a new subscriber subscribes to it, it will immediately receive the last emitted value from the subject. 
bs$.subscribe((value) => {
  console.log(value);
});

bs$.next( 2 );

// 1
// 2
```
BehaviorSubject is hot i.e: code gets executed and emits value even if there is no observer.


## ReplaySubject
can help by keeping a buffer of previous values that will be emitted to new subscriptions.
```ts
import { ReplaySubject } from 'rxjs';

/* create an instance of ReplaySubject. */
const replaySubject = new ReplaySubject<number>();

/* Subscribe to subject. */
replaySubject.subscribe({
  next: (value) => console.log('before:', value),
  error: (error) => console.error('before', error),
  complete: () => console.log('complete before')
});

/* Emit some values. */
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);

/* Subscribe late to subject. */
replaySubject.subscribe({
  next: (value) => console.log('after:', value),
  error: (error) => console.error('after:', error),
  complete: () => console.log('complete after')
});

/* Complete the observable stream. */
replaySubject.complete();

before: 1
before: 2
before: 3
after: 1
after: 2
after: 3
complete before
complete after

```
