/*
    Demo the unsubscribe 
    Only A is received
*/

import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber: any) => {
    subscriber.next('A');

    setTimeout(() => subscriber.next('B'), 3000);
    setTimeout(() => subscriber.next('C'), 3000);
})



const subscription = observable$.subscribe((value) => console.log("receive :", value));

setTimeout(() => {
    subscription.unsubscribe();
}, 1000);