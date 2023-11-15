# Chapter 5: Error Handling

## Classic pattern
```ts
 stream$.subscribe({
     next: (res) => console.log('Value Emitted', res),
     error: (err) => console.log('Error Occurred', err),
     complete: () => console.log('Stream Completed'),
});
```


catchError() will subscribe under the hood to the returned Observable.

## error handling strategies:
- replace strategy
The error handling function returns an Observable
```ts
  catchError((error) => {
      return of();
  })
```
- rethrow strategy
throwError operator creates an Observable that never emits any value.
```ts
  catchError((error) => {
      return throwError(() => error);
  })
```
- retry strategy
```ts
  .pipe(
      retry(3),
      catchError((error) => {
          return throwError(() => error);
      })
  )
```
retryWhen():  retry in only specific cases or wait for a delay before retrying

## Service error handling
```ts

```
