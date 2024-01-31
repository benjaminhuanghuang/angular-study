/*
    combineLatestWith, enables you to combine the latest values from multiple observables into a single observable. 
*/
const { of, interval, timer } = require("rxjs");
const { combineLatestWith } = require("rxjs/operators");

// Create observables
const observable1 = of("A", "B", "C");
//const observable2 = interval(1000); // Emits values every second
const observable2 = timer(0, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now

// Combine observables using combineLatestWith
const combinedObservable = observable1.pipe(combineLatestWith(observable2));

// Subscribe to the combined observable
combinedObservable.subscribe(([value1, value2]) => {
  console.log(
    `Latest values: ${value1} from observable1, ${value2} from observable2`
  );
});
