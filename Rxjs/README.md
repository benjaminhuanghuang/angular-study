
## Notes on Rxjs
(From The Modern Angular Bootcamp ch15)

- Separate library from Angular
- Used extensively by Angular for managing data
- We use this instead of promises or async/await for handling async stuff
- Not strictly required! We can use promises and async/await!
- RxJs makes building some kinds of features really really easy compared to writing normal code
- Hard. Probably the hardest thing in the world of JS, period.
- If you can get a good grasp of RXJS, all of angular is at your fingertips!




## Reference
    - RxJS and Observables with Angular 2
        - https://github.com/coryrylan/observable-rxjs-demos
    - RxJS Essentials


## Key concepts
- Data stream
    One-way, Asynchronous, Independent, immutable(modification creates new stream)

    sample: Twitter Feed, Click Events, Http Calls

- imperative vs reactive

    reactive: program reacts on changes

- Observable: a producer of sequences of values / data stream

- Observer: Consumer of observable values, processor of the data stream

- Subscriber: connects observer with observable, setup observer

- Operator:  value transformation

- Subject: Includes both an observable and Observer

- Cold observables / Hot observables
    cold: start from the beginning for each new subscriber
    hot:  start from the moment subscribe
    movie stream / Movie Theater
    File read, Http request, DB Query / Mouse events 
