## RxJs Error Handling
- RxJs Error Handling - The `Catch and Replace` Error Handling Strategy
```
    const courses$: Observable<Course[]> = http$
        .pipe(
            map(resp => resp["payload"]),
            shareReplay(),
            catchError(err => of([]))
        );
```

- The `Catch and Rethrow` RxJs Error Handling Strategy and the finalize Operator
```
    const courses$: Observable<Course[]> = http$
        .pipe(
            map(resp => resp["payload"]),
            shareReplay(),
            catchError(err => {
                console.error(err);
                return throwError(err);
            }),
            finalize(()=>{
                console.log('')
            })
        );
```
- The Retry RxJs Error Handling Strategy
```
    const courses$: Observable<Course[]> = http$
        .pipe(
            map(resp => resp["payload"]),
            shareReplay(),
            retryWhen(errors => errors.pipe(
                delayWhen(() => timer(2000))
            ))
        );
```
- The startWith RxJs Operator - Simplifying the Course Component
```
    ngAfterViewInit() {
        const searchLessons$ = fromEvent(this.saveButton, 'click')
            .pipe(
                map(event => event.target.value),
                startWith(''),
                debounceTime(400),
                distinctUntilChanged(),
                switchMap(search => this.loadLesson(search))
            );
    }

    loadLessons(search = ''): Observable<Lesson[]> {
        return createHttpObservable('...')
            .pipe(
                map(res => res['payload'])
            )
    }

```
- RxJs Throttling vs Debouncing - Understand the Differences
```   
    ngAfterViewInit() {
        const searchLessons$ = fromEvent(this.saveButton, 'click')
            .pipe(
                map(event => event.target.value),
                throttle(() =>interval(500))),
            );
    }
```
