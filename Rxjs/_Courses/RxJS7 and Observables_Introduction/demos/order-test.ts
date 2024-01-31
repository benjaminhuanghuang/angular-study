import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber: any) => {
    console.log('Observable executed');
    subscriber.next('A');
    subscriber.next('B');
    setTimeout(() => subscriber.error(new Error('Failure'), 2000)); // 4000

    setTimeout(() => {
        subscriber.next('C');
        subscriber.complete();
    }, 4000); // 'C' not received when failure before

    subscriber.complete();
    return () => {
        console.log('Teardown');
    }
})

console.log('Before subscribe');
observable$.subscribe({
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('Complete')
})
console.log('After subscribe');