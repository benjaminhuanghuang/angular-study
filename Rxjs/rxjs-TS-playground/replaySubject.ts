/*
    Subscriber receiving newest data
*/ 
import { ReplaySubject } from "rxjs";

// Keep 3 values for 500
const subject = new ReplaySubject(3, 500);
const series$ = subject.asObservable();

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(4);

series$.subscribe((data)=> console.log(
    "Subscriber1 :", data
));


series$.subscribe((data)=> console.log(
    "Subscriber2 :", data
));


console.log("......")

