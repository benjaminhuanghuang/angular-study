const { Observable, fromEvent } = rxjs;
const { ajax } = rxjs.ajax;
const { flatMap, map, withLatestFrom, timestamp, switchMap } = rxjs.operators;

const holdMeButton = document.querySelector("#hold-me");
const mouseDown$ = fromEvent(holdMeButton, "mousedown");
const mouseUp$ = fromEvent(holdMeButton, "mouseup");

/*
    Create a holdTime$ observable from mouseDown$ and mouseUp$ observables using timestamp and withLatestFrom
    The timestamp operator maps the source observable stream to an object of type {value: T, timestamp: R}. 

    withLatestFrom() Combines the source Observable with other Observables to create an Observable whose values are calculated from the latest values of each
*/
const holdTime$ = mouseUp$.pipe(
  timestamp(),
  withLatestFrom(mouseDown$.pipe(timestamp())),
  map(
    ([mouseUpEvent, mouseDownEvent]) =>
      mouseUpEvent.timestamp - mouseDownEvent.timestamp
  )
);

/*
  There are 2 subscription to holdTime$ observable.
  1. update the DOM
  2. Call API
*/
holdTime$.subscribe((ms) => {
  document.querySelector("#hold-time").innerText = ms.toString();
});

/*

*/
holdTime$
  .pipe(
    switchMap((ms) =>
      ajax.get("https://timing-sense-score-board.herokuapp.com/score/" + ms)
    ),
    map((response) => response.response)
  )
  .subscribe((res) => {
    document.querySelector("#rank").innerText =
      "你超过了" + res.rank + "% 的用户";
  });
