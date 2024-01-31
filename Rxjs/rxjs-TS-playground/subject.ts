import { Subject } from "rxjs";


const subject = new Subject();
const series$ = subject.asObservable();

series$.subscribe(console.log);

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

// the late subject doest receive value
setTimeout(() => {
    series$.subscribe(val=> console.log("late sub:", val))

}, 3000)


subject.complete();
