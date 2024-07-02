# Unit Testing with Hot and Cold Observables

## Hot and Cold Observables

Hot: start emitting the values before any subscription is made. All subscribers get latest values at the time of subscription. Multicast, more than one subscriber can subscribe to the same observable, they will listen to the same producer.

Cold: producer is owned by the observable, it starts emitting values when the subscriber subscribes. Unicast, each subscriber will get its own copy of values.


```ts
  of('a','b')                //(ab |) Emit a single grouped value on same time frame
  from(['a', 'b'])           //(ab|)

  const cold = cold('|');    // EMPTY

  const cold = cold('(abcd|)');    // emit all values and complete in a single time frame

  const cold = cold('abcd|');     //  emit values in multiple time frames one by one

```

## Test hot observable
'-a---^b---c---|'
     '^--------!'  // Subscription marble diagram
      ^ is the 0 frame where the subscription is made
               !  is unsubscription frame
      -b---c---| 
