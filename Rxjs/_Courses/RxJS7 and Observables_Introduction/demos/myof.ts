/*
    Clone the of operator in rxjs
*/

import { Observable } from 'rxjs';

function myof(...args: string[]): Observable<string> {
    return new Observable<string>(subscriber => {
        for (let s of args) {
            subscriber.next(s);
        }
        subscriber.complete();
    });
}

myof('a', 'b', 'c', 'd') .subscribe({
    next: (s: string) => console.log(s),
    complete: () => console.log('complete'),
})