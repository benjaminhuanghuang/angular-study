# Subject
Subject allows us to multicast a value or event to multiple Observers. 
It is like EventEmitters in Angular. 

Subject is a combination of an observable and an observer. This means your can subscribe to a subject the way you did to a regular observable and you can call next on the subject to emit new values to multicast all active subscribers. 

Plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.

## Cold Observable vs Hot Observable
Regular observable is cold observable. When you subscribe to it, it generated a separate source of data independently for each subscriber.

When you subscribe to hot observable, the new subscription just create a new connection to an already existing source of data/event.

The subject is a hot observable. Calling next on the subject to emit new values to multicast all active subscribers. 
