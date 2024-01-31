
## Subject vs Observable
In Observable we need a separate observer to feed an observable

1. Subject implement both the observable and observer interfaces. Subject can be both consumers and provider. 

2. Observables are cold, they emit the data only when there is a subscriber. 
  Subjects are hot, they emit data even without a subscriber. 

3. Observable is unicast, Each subscribed Observer owns an independent execution of the Observable.
   Subject is multicast. The execution is shared among multiple subscribers.

```ts
getObservableData() {
  let myobservable = new Observable<any>(observer => {
    // observer.next ("Please subscribe to WebTechTalk");
      observer.next (Math.floor(Math.random() * 100));  // Each subscribed Observer receive different value.
  });

  myobservable.subscribe(data => {
    console.log(data);
  });

  myobservable.subscribe(data => {
    console.log(data);
  });
}

getSubjectData() {
  let mySubject = new Subject();
  
  // Subjects are hot, they emit data even without a subscriber. 
  mySubject.next("this data will be lost, because it is emitted before subscribe");  

  mySubject.subscribe(data => {
    console.log(data);
  });
  mySubject.next("Please subscribe to WebTechTalk");  
```
