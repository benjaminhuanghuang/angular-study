import { of, fromEvent, from, Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';

of(1, 2, 3)
    .pipe(
        map(x => x * x)
    ).subscribe(data => {
        console.log(data);
    })


// scan is used to transform an Observable by applying a function to each value in the stream, 
// and returning an Observable that emits the cumulative result. It is similar to the reduce 
fromEvent(document, 'click')
    .pipe(scan(count => count + 1, 0))
    .subscribe(count => {
        console.log(`Clicked ${count} times`);
    });


const arraySource = from([1, 2, 3, 4, 5]);
arraySource.subscribe((val) => console.log(val));

const observable = new Observable(subscriber =>{
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);

    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    },2000);
})

observable.subscribe((v) => console.log(`value: ${v}`));