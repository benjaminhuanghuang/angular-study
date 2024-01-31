import { Observable, Subject } from "rxjs";
const observable$ =new Observable(observer =>{
    observer.next(Math.random());
});

/*
    Two subscribers will receive different data
*/
observable$.subscribe((data)=> {
    console.log("subscribers 1:", data);
});

observable$.subscribe((data)=> {
    console.log("subscribers 2:", data);
});




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

