import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let promise = new Promise(resolve=>{
    setTimeout(()=>{
        resolve('promise timeout');
    }, 2000)
});

promise.then(value=> console.log(value));

let stream1$ = new Observable(observer=>{
    setTimeout(()=>{
        observer.next('observable timeout');
    }, 2000);
});

stream1$.subscribe(value=> console.log(value));

