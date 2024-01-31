import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber: any) => {
    console.log('Observable executed');
    subscriber.next('A');
})

console.log('Before subscribe');
observable$.subscribe((value) => console.log(value));
console.log('After subscribe');