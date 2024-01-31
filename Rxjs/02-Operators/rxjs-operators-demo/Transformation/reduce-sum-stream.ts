/*
signature: reduce(accumulator: function, seed: any): Observable

Reduces the values from source observable to a single value that's emitted when the source completes
*/
import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

const source = of(1, 2, 3, 4);
const example = source.pipe(reduce((acc, val) => acc + val));
//output: Sum: 10'
const subscribe = example.subscribe(val => console.log('Sum:', val));
