/*
Complete a stream based on another stream-takeUntil
*/
import { timer, interval } from "rxjs";

import { takeUntil } from "rxjs/operators";

//stream1
const counter$ = interval(1000);

//after 5 seconds, emit value
const timer$ = timer(5000);

counter$
  .pipe(
    takeUntil(timer$),
  )
  .subscribe((value) => {
    console.log(value);
  });
