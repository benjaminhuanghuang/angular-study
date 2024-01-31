import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber: any) => {
    console.log('Observable executed');


    subscriber.complete();
    return () => {
        console.log('Teardown');
    }
})

console.log('Before subscribe');
observable$.subscribe()
console.log('After subscribe');