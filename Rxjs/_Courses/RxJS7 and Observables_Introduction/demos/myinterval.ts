import { Observable } from 'rxjs';

console.log('\nApp started ...');

const interval$ = new Observable<number>(subscriber => {
    let counter = 0;
    const intervalId = setInterval(() => {
        console.log('Time out');
        subscriber.next(counter++);
    }, 1000);

    return () => {
        clearInterval(intervalId);
    };
});


const subscription = interval$.subscribe({
    next: (value) => {
        console.log(value);
    },
    complete: () => { console.log('complete'); }
});

setTimeout(() => {
    subscription.unsubscribe();
    console.log('Unsubscribed');
}, 5000);