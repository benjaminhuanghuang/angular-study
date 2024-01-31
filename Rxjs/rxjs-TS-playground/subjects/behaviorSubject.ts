/*
    Subscriber receiving newest data
     when you subscribe, it will give you the latest value that was emitted before you tuned in, and then you continue getting updates. 
*/ 
import { BehaviorSubject } from "rxjs";

// Subscriber receiving newest data 
const subject = new BehaviorSubject(0);
const series$ = subject.asObservable();

series$.subscribe((data)=> console.log(
    "Received new data :", data
));
console.log("......")

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

// the late subject doest receive value
setTimeout(() => {
    series$.subscribe(val=> console.log("late sub:", val))
}, 3000)


//subject.complete();
