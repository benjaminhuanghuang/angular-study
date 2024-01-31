import { Subject } from "rxjs";


const subject = new Subject();

/*
    Two subscribers will receive data at the same time 
*/
subject.subscribe((data)=> {
    console.log("1", data);
});

subject.subscribe((data)=> {
    console.log("2", data);
});

setTimeout(() => {
    subject.next('hello');
}, 3000)

console.log("start....");

