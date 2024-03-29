# RxJS 7 and Observables: Introduction
by Jurek Wozniak 
5.5 hours

https://www.udemy.com/course/rxjs-and-observables/

https://www.bilibili.com/video/BV1qr4y1U7Mp

https://github.com/jroux-git/udemyJurekRxJS



1. Streams vs Arrays
---------------------
1.1 Array: You have full access to all data in Array immediately. Each element easily accessible
1.2 Stream: All data not immediately available. React to objects as the come into the stream

1. Observable
---------------
2.1 Single callback function with rules and guarantees that guides behavior
2.2 Once executed, it can emit notifications. 3 Types
2.2.1 Next: Lets you emit values:
        const obeservable$ = new Observable(subscriber => {{
            subscriber.next('Alice');
            subscriber.next('Bob');
        }});

2.2.2 Error
2.2.3 Complete
2.2 Doesnt run any code, it just has callbacks

3. Observer
------------
3.1 Describes the reaction to emitted values from the observable
3.2 Has a "next" function. This provides implementation for the notifications from the "next" function of the Observable
    e.g
    const observer = {
        next: value => console.log(value);
    }

4. Subscription
-----------------
4.1 Executes the Observable
4.2 Runs the callback inside the Observable and passes the observer to it
4.3 e.g.
    obeservable$.subscribe(observer);
4.4 Subscriptions can be ended in the "error" and "completed" functions of the obeservable or cancel the Subscription by 
    unsubscribing to prevent unwanted side effects and memory leaks.
    e.g.
    const subscription = obeservable$.subscribe(observer);
    subscription.unsubscribe();
