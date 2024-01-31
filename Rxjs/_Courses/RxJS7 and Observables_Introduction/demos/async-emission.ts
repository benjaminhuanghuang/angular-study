import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber: any) => {
    console.log('Observable executed');
    subscriber.next('A');
    subscriber.next('B');
    setTimeout(() => subscriber.next('C'), 1000)
})

console.log('Before subscribe');
observable$.subscribe((value) => console.log(value));
console.log('After subscribe');