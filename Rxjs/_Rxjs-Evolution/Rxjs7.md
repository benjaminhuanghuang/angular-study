# RxJS 7 was released on April 29, 2021
- Smaller bundle size
- More operator
- RxJS 7 requires TypeScript 4.2 and takes advantage of its latest features
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

The toPromise() method available in RxJS is a util method that is used to convert an Observable to a Promise. The toPromise() subscribes to the Observable and returns the last value emitted by this Observable.

In RxJS 6, when an error happens, toPromise() returns undefined. But this is not accurate!
you cannot differentiate between the case where no value was emitted before completion of the observable and the case where an undefined value was emitted last.

toPromise() is now deprecated in favor of firstValueFrom() and lastValueFrom().


[Angular | RxJS 7 - toPromise() Deprecation](https://www.youtube.com/watch?v=3aeK5SfWBSU)
