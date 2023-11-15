# Rxjs Terms and Syntax
## Observer
  - Observes and responds to notifications, knows how to listen to values delivered by Observable.
  - An object with 3 methods to process the notifications
  - An observer is a consumer of values delivered by an Observable.
  - 
  ```ts
  const observer = {
    next: apple => console.log('Apple emitted ${apple}'),
    error: err => console.log('Error occurred: ${err}'),
    complete: () => console.log( 'No more apples, go home')
  }
  ```
## Observable
A collection of events or values emitted over time
- User actions
- Application events (routing, forms)
- Response from an HTTP request
- Internal structures
```ts
  const apples$ = new Observable(appleSubscriber => {
    appleSubscriber.next('Apple 1');
    appleSubscriber.next('Apple 2');
    appleSubscriber.complete();
  }) ;
```
Function appleSubscriber() is called when the Observable is subscribed



## Hot observable vs Cold observable
Hot observable: Even if there is no subscriber, the observable is still emitting values
Cold observable: The observable starts emitting values when there is a subscriber. Each subscriber has its own execution path.


## Subscribing
```ts
const applesS = new Observable(appleSubscriber => {
  appleSubscriber.next('Apple 1');
  appleSubscriber.next('Apple 2');
  appleSubscriber.complete();
});

const observer = {
  next: apple => console.log(`Apple emitted ${apple}`),
  error: err => console.log(`Error occurred: ${err}`),
  complete: () => console.log('No more apples, go home')
}

const sub = apples$.subscribe(observer);

```

## Subscriber
- An Observer that can unsubscribe
