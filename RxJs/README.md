## What

Think of RxJs as Lodash for events.

ReactiveX combines the Observer Pattern with the Iterator Pattern and functional programming with collections to fill the need for an ideal way of managing sequences of events.

## promises and observables

A promise is an eventual value

An observable is a series of eventual value
One important difference between promises and observables is that observable callbacks are called whenever new values are emitted from an observable, whereas promises are only resolved once.

## Key elements

- Observable :data or event (array, DOM event, HTTP requests, timers) generator
- Subscription
- Observer
