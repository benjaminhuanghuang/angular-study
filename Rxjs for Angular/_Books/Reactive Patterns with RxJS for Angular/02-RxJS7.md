# Chapter 2: RxJS 7 – The Major Features

## Takes advantage of TS4.2 latest features
For example, in RxJS 6, you can create a subject of a specific type and call next() without passing arguments; while, in RxJS 7, the same instruction will cause a compilation error because the subject's specified type has not been respected.
```ts
//RxJs 6 example
const subject = new Subject<number>();
subject.next(); //compiles fine

//RxJS 7 example
const subject = new Subject<number>();
subject.next(); //compilation error
const subject = new Subject<void>();
subject.next();//compiles fine
```


## toPromise() is deprecated in RxJS 7 and will be deleted permanently in RxJS 8
The major difference is that observables can produce `none or more` than one value, while promises only produce `one` value when resolved successfully.

toPromise() subscribes to the Observable and returns the last value emitted by this Observable.

In RxJS 6, when an error happens, toPromise() returns undefined. But this is not accurate!
You cannot differentiate between the case where no value was emitted before completion of the observable and the case where an undefined value was emitted last.

```ts
const source$ = new Observable<string>(observer => {
  observer.next(undefined);   // undefined
  observer.complete();
  
});

hello();

async function hello() {
  const value = await source$.toPromise();
  console.log(value);
}

//console output is undefined to both cases
```
When converting an observable into a promise, you might want to select which value to pick – either the first value that has arrived or the last one.

toPromise() is now deprecated in favor of firstValueFrom() and lastValueFrom().
The lastValueFrom() method is recommended when you're sure an observable will complete. 
The firstValueFrom() method is recommended when you're sure an observable will emit at least one value or complete

when there is no value, is to throw a specific kind of error: EmptyError
if you want to customize this behavior, you can use the defaultValue parameter. The defaultValue parameter will be used to resolve a promise when the observable completes without emitting a value:
```
  const value = await lastValueFrom(source$, { defaultValue: 'DEFAULT' });
```
