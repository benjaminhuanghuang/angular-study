import { fromEvent, Subject, map } from "rxjs";


const emitButton = document.querySelector('button#emit');
const inputElement = document.querySelector('#value-input');
const subscribeButton = document.querySelector('button#subscribe');


const value$ = new Subject<string>();

// emit value
fromEvent(emitButton as HTMLButtonElement, 'click').subscribe(
    () => value$.next((inputElement as HTMLInputElement).value)
)

// Method 2: value$ is a observer
fromEvent(emitButton as HTMLButtonElement, 'click').pipe(
    map(() => (inputElement as HTMLInputElement).value)
).subscribe(value$);


// add more subscribe
fromEvent(subscribeButton as HTMLButtonElement, 'click').subscribe(
    () => {
        console.log('Add one more subscribe');
        value$.subscribe(value => console.log(value))
    }
)

