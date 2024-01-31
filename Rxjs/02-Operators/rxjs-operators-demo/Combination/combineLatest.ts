/*
Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables.

Whenever any input Observable emits a value, it computes a formula using the `latest` values `from all the inputs`, then emits the output of that formula.
*/


import { timer, combineLatest } from 'rxjs';

const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now

const combinedTimers = combineLatest([firstTimer, secondTimer]);

combinedTimers.subscribe(value => console.log(value));
// Logs
// [0, 0] after 0.5s
// [1, 0] after 1s
// [1, 1] after 1.5s
// [2, 1] after 2s
