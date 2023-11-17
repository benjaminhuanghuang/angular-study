import { fromEvent, interval } from "rxjs";

import { takeUntil } from "rxjs/operators";

//stream1
const counter$ = interval(1000);
//stream2
const click$ = fromEvent(abortButton, 'click');

counter$
  .pipe(
    takeUntil(click$),
  )
  .subscribe((value) => {
    console.log(value);
  });
