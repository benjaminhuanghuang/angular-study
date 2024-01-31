/*


*/
import { catchError, of, Observable, EMPTY } from "rxjs";
const failedHttpRequest$ = new Observable(subscriber => {
    setTimeout(() => {
        subscriber.error(new Error('Timeout'))
    }, 3000);
});

console.log('\nApp started');
failedHttpRequest$.pipe(
    catchError((error) =>{
        //return of('Fallback value')
        return EMPTY;
    })
).subscribe({
    next: value => console.log(value),
    complete: () => console.log('Complete') // emitted by EMPTY 
});