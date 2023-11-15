Observable
- Collection of events or values emitted over time

Observer
- Observes notifications from the Observable
- Methods to process notifications:
next(), error(), complete()

Subscriber
- An Observer that can unsubscribe from the observable

Subscription
- Tells the Observable that the subscriber is ready for notifications
- subscribe() returns a Subscription
- Use Subscription to unsubscribe
