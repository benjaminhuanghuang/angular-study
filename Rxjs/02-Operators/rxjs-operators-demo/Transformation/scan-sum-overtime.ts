/*

signature: scan(accumulator: function, seed: any): Observable

With each emitted value, the accumulator function is applied, and the accumulated result is emitted instantaneously

scan is used to transform an Observable by applying a function to each value in the stream, 
and returning an Observable that emits the cumulative result. It is similar to the reduce 
*/

import { of, Subject} from 'rxjs';
import { scan } from 'rxjs/operators';


/*
Sum over time
*/
const source = of(1, 2, 3);
// basic scan example, sum over time starting with zero
const example1 = source.pipe(scan((acc, curr) => acc + curr, 0));
// log accumulated values
// output: 1,3,6
const subscribe1 = example1.subscribe(val => console.log(val));
