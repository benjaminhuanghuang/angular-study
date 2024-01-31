/*

Projects each source value to an Observable which is merged in the output Observable, 
in a serialized fashion waiting for each one to complete before merging the next.

*/

import { Observable, concatMap, of } from 'rxjs';

const source$ = new Observable(subscriber => {
    setTimeout(() => {
        subscriber.next('A')
    }, 3000);
    setTimeout(() => {
        subscriber.next('B')
    }, 5000);
});


console.log('\nApp started');

source$.pipe(
    concatMap(value => {
        return of(1, 2)
    })
).subscribe((value) => console.log(value));