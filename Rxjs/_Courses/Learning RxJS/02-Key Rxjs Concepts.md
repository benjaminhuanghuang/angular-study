## BehaviorSubject
An observable that allows the user to get the current value at any time

```ts
import { BehaviorSubject } from 'rxjs';


temperatureSubject$ = new BehaviorSubject<number>(23);

//emit value
temperatureSubject$.next(100);


// subscribe to get the current value
temperatureSubject$.subscribe(
    temperature => console.log(temperature)
);
```

## Subject

```ts
import { Subject } from 'rxjs';


temperatureSubject$ = new Subject<number>();

//emit value
temperatureSubject$.next(100);


// subscribe to get the current value
temperatureSubject$.subscribe(
    temperature => console.log(temperature)
);
```

## ReplaySubject
A type of subject that remembers previously passed values and passes all of them to new subscriptions
```ts

```

## Subject vs BehaviorSubject vs ReplaySubject
Subject
- Does not require initial value and passes new data as it receives it
- Does not immediately emit current value for new subscriptions
- Broadcasts events to every subscriber for every new value

BehaviorSubject
- Requires initial value
- Emits current value on subscription
- Broadcasts events to every subscriber for every new value

ReplaySubject
- Remembers data passed to it and passes all of that data to new subscribers
