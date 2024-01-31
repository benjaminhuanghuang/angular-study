## What is the difference between an Observer and a Subscriber?

While the Observer is the public API for consuming the values of an Observable , all Observers get converted to a Subscriber, in order to provide Subscription-like capabilities such as unsubscribe . Subscriber is a common type in RxJS, and crucial for implementing operators, but it is rarely used as a public API.
