import {from} from 'rxjs';

const somePromise = new Promise((resolve, reject) => {
    //resolve('resolved');
    reject('rejected');
});


const observableFromPromise$ = from(somePromise);


observableFromPromise$.subscribe({
    next: value => console.log(value),
    error: error => console.log(error),
    complete: () => console.log('complete'),
});