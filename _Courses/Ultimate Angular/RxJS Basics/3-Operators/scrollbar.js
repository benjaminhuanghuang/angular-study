import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

// helpers
function calculateScrollPercent(element) {
  const { scrollTop, scrollHeight, clientHeight } = element;
  return scrollTop / (scrollHeight - clientHeight);
}

// streams
const scroll$ = fromEvent(document, "scroll");
const progress$ = scroll$.pipe(
  // percent progress
  map(({ target }) => calculateScrollPercent(target.documentElement))
);

scroll$.subscribe(percent =>{
    progressBay.style.width = `${percent * 100}%`;
});
