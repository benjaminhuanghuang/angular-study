## Notes on Rxjs
- Separate library from Angular
- Used extensively by Angular for managing data
- We use this instead of promises or async/await for handling async stuff
- Not strictly required! We can use promises and async/await!
- RxJs makes building some kinds of features really really easy compared to writing normal code
- Hard. Probably the hardest thing in the world of JS, period.
- If you can get a good grasp of RXJS, all of angular is at your fingertips!


## Rxjs visualizer
https://github.com/moroshko/rxviz

https://out.stegrider.vercel.app/


```js

const{fromEvent} = Rx;
const input = document.createElement('input');
const container = document. querySelector (' .container');
container .appendChild(input);
const observable = fromEvent (input, 'input');
// This is specific to this fool, we don't need to
// write this in the real world
observable;
```

## Unicast Observables / Cold Observables
Emit a separate set of values for each observer that subscribes
All of the operators in a pipe will be executed for each separate observer that subscribes
Can easily lead to bad behavior!
Event stream recreated for each new subscriber

## Multicast Observables / Hot Observables
Emit a single set of values for all observers that subscribe
All of the operators in a pipe are executed just once
The observable will be 'reset' if it gets 'completed' or 'errored' then another subscriber is added
Quickly runs into issues with a later subscriber not seeing earlier events!

Single event stream shared for all subscribers old and new
