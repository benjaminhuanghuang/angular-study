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
When a new subscriber subscribes to it, it will immediately receive the last emitted value from the subject. 
