/*
    Each new subscription runs the code in the Observable independently from other subscriptions
*/

import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber: any) => {
    subscriber.next('A');

    setTimeout(() => subscriber.next('B'), 1000);
    setTimeout(() => subscriber.next('C'), 1000);
})


console.log('subscription 1 starts');
observable$.subscribe((value) => console.log("Subscription1 receive :", value));

setTimeout(() => {
    console.log('subscription 2 starts');
    observable$.subscribe((value) => console.log("Subscription2 receive :", value));
}, 3000);