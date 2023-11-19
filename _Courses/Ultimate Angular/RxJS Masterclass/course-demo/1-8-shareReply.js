import { from, shareReplay } from "rxjs";
import { ajax } from "rxjs/ajax";
import { shareReplay, mergeMap } from "rxjs/operators";

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete!"),
};

const ajax$ = ajax("https://api.github.com/users/octocat");

const click$ = from(document, "click");

const clickRequest$ = click$.pipe(
  mergeMap(() => ajax$), // mergeMapTo is the same as mergeMap(() => ajax$)
  shareReplay(1, 2000) // shareReplay(1, 2000) will replay the last value emitted by the source observable for 2 seconds
);

// with out shareReply, each click triggers two requests, one for each subscription
clickRequest$.subscribe(observer);
clickRequest$.subscribe(observer);

setTimeout(() => {
  clickRequest$.subscribe(observer);
});
