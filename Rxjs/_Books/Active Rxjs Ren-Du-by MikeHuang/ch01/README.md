


## Key concepts
- Asynchronous Programming
- Stream
- Observer Pattern
- Iterator Pattern
- Functional Programming


## From event
```
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// 1. Create Observable
const documentClick$ = fromEvent (document, 'click');

// 2. Combine
const mouseClickPos$ = documentClick$
.pipe(
    filter((event: MouseEvent) => event.ctrlKey)),
    map (event => ({
        x: event.clientX,
        y: event.clientY
    })
);

// 3. Subscribe/Listen
mouseClickPos$.subscribe (pos => {
    console.log (pos);
});
```



## create observable
```
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

// 1. Create Observable
const source$ = new Subject ();

// 2. Combine
const even$ = source$.pipe(
    filter(data => data % 2 === 0)
);

// 3. Subscribe/Listen
even$.subscribe (data => {
console.log (data);
});

// 4. Emit data
source$.next (0);
source$.next (1);
source$.next (2);
source$.next (3);
```

## Observer
Observer is a object that has 3 methods:
```
const observer = {
    next: (data) =› console. log(data),
    error: (err) =› console. log(err),
    complete: () =› console. log('complete')
};
```

Observer is used to subscribe the notification from Observable.
```
    observable.subscribe(observer);
```

Only process the next notification
```
    observable.subscribe({
        next: data => console.log(data)
    });
```
or pass in a function, it will be used as next method
```
    observable.subscribe(data => console.log(data));
```
