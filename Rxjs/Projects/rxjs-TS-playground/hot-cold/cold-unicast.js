const { Observable } = require("rxjs");
const { publish, share } = require("rxjs/operators");

const coldObservable$ = new Observable((subscriber) => {
  subscriber.next(Date.now());
});

/*
We will get 2 different output per subscription.
With this output it is clear that there must have been two calls to observer.next(Date.now()). 
In other words, the Observable started producing the values upon each subscription which makes it cold by definition.
*/
coldObservable$.subscribe((v) => console.log("1st subscriber:", v));
coldObservable$.subscribe((v) => console.log("2nd subscriber:", v));

const hotObservable$ = new Observable((subscriber) => {
  subscriber.next(Date.now());
}).pipe(publish());
hotObservable$.subscribe((v) => console.log("3rd subscriber:", v));
hotObservable$.subscribe((v) => console.log("4th subscriber:", v));
