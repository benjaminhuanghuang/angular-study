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
