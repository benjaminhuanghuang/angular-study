import { Observable } from "rxjs";

const interval$ = new Observable<number>((subscriber: any) => {
    let counter =1;
    setInterval(()=>{
        console.log('Emitted',counter);
        subscriber.next(counter++);
    }, 1000);

    return () => {
        console.log('Teardown');
    }
})

const subscription = interval$.subscribe(value => console.log(value));

setTimeout(()=>{
    console.log('Unsubscribe');
    subscription.unsubscribe();   // Cannot stop emit
}, 4000);

//-------------------------
const interval2$ = new Observable<number>((subscriber: any) => {
    let counter =1;
    const intervalId = setInterval(()=>{
        console.log('Emitted2',counter);
        subscriber.next(counter++);
    }, 1000);

    return () => {
       clearInterval(intervalId)    // Stop the emit
    }
})

const subscription2 = interval2$.subscribe(value => console.log(value));

setTimeout(()=>{
    console.log('Unsubscribe2');
    subscription2.unsubscribe();  
}, 4000);

