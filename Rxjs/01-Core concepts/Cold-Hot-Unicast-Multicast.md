## Unicast
A basic Observable is a `unicast` Observable, which means each subscribed Observer owns an independent execution of the Observable. 
Thus, when there are multiple subscriber, each subscriber gets a new Observable, they will receive independent emissions

## Multicast
A subject is a `multicast` Observable, which means that multiple subscribers can listen to the same Observable execution. 
Multiple subscribers share the same emission. When the data is emitted, all the subscribers will receive the same emissions.


## Cold
Cold observables start running upon subscription, i.e., the observable sequence only starts pushing values to the observers when Subscribe is called. 
Cold observables should produce fresh values upon subscription

Cold observables do not emit anything until there is a subscription. This is the default behavior of observables.

Cold observables are like movies or tv shows. They start from the beginning and emit the same sequence of events to every subscriber.

Cold observables are normally unicast observables because each subscriber gets its own sequence of events.

Each subscriber get its own set of emissions

For example, if you have a cold observable that emits the numbers 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, each subscriber will get the same sequence of numbers.
Observable return from an HTTP get is a cold observable.we must subscribe or let an async pipe subscribe before it
emits any values other types of

Cold observables start when they get first subscriber.  Each subscriber gets the value in the observable sequence from the beginning. 
For example, File read, Http request, DB query, etc.

## Hot
Hot observables such as mouse move events or stock tickers which are already `producing values` even before a subscription is active.
Hot observables activate the source when creation, then start emitting values immediately even there are not subscribers.
Hot observables are normally multicast observables because all subscribers get the same sequence of events.

Hot observables start when they are created. Hot observables provide only the values that come through after the subscriber subscribes.
For example, mouse clicks, key presses, stock tickers, etc.

It’s not always possible from the subscriber side to know whether you are dealing with a cold or hot Observable.

## Subject  
A subject is a hot observable. It is a multicast observable that starts emitting values immediately when it is created.

Subject can be used to convert uni-casts observable to multi-casts observable.

When subscribing to a hot observable, the subscriber will receive the next emission.


## BehaviorSubject
It's important to pay attention to when it emits and when subscribers subscribe the code will miss any emissions that occur before their
subscription

If we want a later subscriber to receive the prior emission that's the purpose of a behavior subject
when using a behavior subject the most recent emitted value is automatically cached by the behavior subject the value
The recent emitted value is automatically cached by the behavior subject, the value is emitted to any new subscribers
when they subscribe to the behavior subject






## Resources
https://www.youtube.com/watch?app=desktop&v=dWgpLoD1cCE
