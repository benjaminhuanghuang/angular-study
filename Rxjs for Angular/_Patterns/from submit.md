# Save in sequence
We need to wait for the first save request to complete before trigger the second
The save operation is happening `in sequence`
The solution is concatMap(). concatMap() ensure the first saving is completed before issuing the second.

```ts
  saveCourse(changes) {
      return fromPromise(fetch(`/api/courses/${$this.course.id}`, {
          method: 'PUT',
          body: JSON.stringify(changes),
          headers: {
              'content-type': 'application/json'
          }
      }));
  }

  this.form.valueChanges
      .pipe(
          filter(() => this.from.valid), 
          // second save is only going to be triggered after the first save request is complete
          concatMap(changes =>  this.saveCourse(changes))   
      )
      .subscribe();
```
# Save in parallel
Save value without waiting for the previous observables all have completed.
```ts
 this.form.valueChanges
    .pipe(
        filter(() => this.from.valid), 
        // requests running in parallel
        mergeMap(changes =>  this.saveCourse(changes))   
    )
    .subscribe();
```

## Prevent multiple save button clicks
Prevent use from hitting the save button multiple times and trigger multiple parallel calls to backend. 

exhaustMap() Ignore new values when previous observable is not completed. 

```ts
 this.form.valueChanges
        .pipe(
            filter(() => this.from.valid), 
            // requests running in parallel
            mergeMap(changes =>  this.saveCourse(changes))   
        )
        .subscribe();
```

## Cancellable HTTP Observable (for search)
```ts
export function createHttpObservable(url:string) {
    return Observable. create(observer = {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(url, {signal})
        .then (response = {
        return response. json();
    })
        .then body =>{
        observer. next (body) ;
        observer. complete();
    })
    .catch(err = {
        observer.error(err);
    });
    return () = controller.abort()
}


const http$ = createHttpObservable('/api/courses');
http$.subscribe(console.log);

// cancel the subscription after 5 seconds
setTimeout (() => sub.unsubscribe(),5000);
```



## Debounce
```ts
   @ViewChild('searchInput') input: ElementRef;

    ngAfterViewInit() {
        const searchLessons$ = fromEvent(this.input.nativeElement, 'keyup')
        .pipe(
            map(event => event.target.value)
            debounceTime(400),
            distinctUntilChanged(),
            switchtMap(search => this.loadLesson(search))  // cancel the previous search
        )

        const initialLessons$ = this.loadLessons();

        this.lessons$ = concat(initialLessons$, searchLessons$);
    }

    loadLessons(search='') {
        return createHttpObservable(`/api/lessons?filter={search}&pageSize=100`)
        .pipe(
            map(res => res['payload'])
        );
    }
```
