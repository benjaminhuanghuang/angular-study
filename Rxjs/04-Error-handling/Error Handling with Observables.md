# Error Handling with Observables

https://www.youtube.com/watch?v=L9kFTps_7Tk

## Options (in the Service)

- Ignore the error
  - Catch the error in the component

- Catch the error and rethrow
  - Should return a valid Observable
  - Catch the error again in the component

```ts
  users$ = this.http.get<User[]>('/api/users').pipe(
    catchError(this.handleError)
  );


  private handleError(err: HttpErrorResponse): Observable<never> {
    const errorMessage = `An error occurred: ${err.error.message}`;
    console.error(err);
    return throwError(() => errorMessage); 
  }
  // Observable<never> means a observable that never emits a value to Observer and never completes

  users$ = this.http.get<User[]>('/api/users').pipe(
    catchError(err => {
      this.errorMessage = err;  // bind error in the template
      return EMPTY;    // Emit no values and complete immediately
    }
  );
```

- Catch the error and continue
  - Must return a valid Observable of the appropriate type
  - More difficult to get an error message to the UI
