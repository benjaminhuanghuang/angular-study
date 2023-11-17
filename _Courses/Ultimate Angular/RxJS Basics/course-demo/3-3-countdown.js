import { from, interval } from "rxjs";

import { reduce, take, scan, map } from "rxjs/operators";

//streams
const counter$ = interval(1000);

counter$
  .pipe(
    map(() => value -1), 
    scan((accumulator), current => {
        return accumulator - current;
    }, 10)
  )
  .subscribe((value) => {
    if(value ==0) {
        console.log("done!");
    }
  });
