
##  What are RxJs Operators? Learn the `map` Operator
```js
    const courses$ = http$.pipe(
        map(resp => resp["payload"]),
    );
```


## Building Components with RxJs - Imperative Design

Imperative Design bind value to the template
```js
    ngOnInit () {
        const https = createlttpobservable('/api/courses');
        const courses$ = http$.pipe(
            map(res => Object.values(res["payload"]) 
            );
        
        courses$.subscribe(
            courses =>
            {
                this. beginnerCourses = courses. filter(course => course.category === 'BEGINNER');
            }
        );
```
Do not put lot of logic in subscribe method.
Do not nest subscribe method

## Building Components with RxJs - Reactive Design
Reactive design bind observable to temple
```ts
    const courses$ = http$.pipe(map(resp => resp["payload"]));
    this.beginnerCourses$ = http$
        .pipe(
            map(courses => courses.filter(course => course.category === 'BEGINNER'))
        );  
```

Use observable in template
```html
    <courses-list [courses]="beginnerCourses$ | async">
```
The benefit:
    The async pipe unsubscribe from the observable once the component get destroyed
    No need to subscribe/unsubscribe the observable at component level, the subscription is managed by the async pipe at the template level


## Sharing HTTP Responses with the `shareReplay` Operator
In this sample, if beginnerCourses$ and this.advancedCourses$ are bind to template, there will be 2 different subscriptions to the http$ observable. 
That will cause 2 http requests. 
```ts
    const courses$ = http$.pipe(map(resp => resp["payload"]));
    this.beginnerCourses$ = http$
        .pipe(
            map(courses => courses.filter(course => course.category === 'BEGINNER'))
        );  
    this.advancedCourses$ = http$
        .pipe(
            map(courses => courses.filter(course => course.category === 'ADVANCED'))
        );  
```

The solution is to use shareReplay operator, the course$ observable will be shared across multiple subscriptions
```ts
    const courses$ = http$.pipe(
        tap(() => console.log('HTTP request executed')),
        map(resp => resp["payload"]),
        shareReplay()
    );
    this.beginnerCourses$ = http$
        .pipe(
            map(courses => courses.filter(course => course.category === 'BEGINNER'))
        );  
    this.advancedCourses$ = http$
        .pipe(
            map(courses => courses.filter(course => course.category === 'ADVANCED'))
        );  
```

## Observable Concatenation - In-Depth Explanation
```
    const sources1$ = of(1, 2);
    const sources2$ = of(a, b);
    
    const result$ = concat(sources1$, sources2$);
```

## Form Draft Pre-Save Example and the RxJs `filter` Operator
Using form.valueChanges.

```ts
this.form.valueChanges
    .pipe(
        filter(() => this.from.valid)
    )
    .subscribe(changes => {
        const saveCourse$ = fromPromise(fetch(`/api/courses/${$this.course.id}`, {
            method: 'PUT',
            body: JSON.stringify(changes),
            headers: {
                'content-type': 'application/json'
            }
        }));

        saveCourse$.subscribe();
    });

    
```
## The RxJs concatMap Operator - In-Depth Explanation and Practical Example
We need to wait for the first save request to complete before trigger the second
concatMap() ensure the first saving is completed before issuing the second.

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
In this approach, new http request was triggered when user is typing 


## Understanding the `merge` Observable combination Strategy
Merge is ideal for performing asynchronous operations in parallel

```ts
    const interval1$ = interval(1000);
    const interval2$ = interval$(map(value => 10 * value));

    const result$ = merge(interval1$, interval2$);
```

## The RxJs `mergeMap` Operator - In-Depth Explanation
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
## The RxJs `exhaustMap` Operator - In-Depth Explanation

This approach will transform multiple clicks to multiple requests 
```
    ngAfterViewInit() {
        fromEvent(this.saveButton, 'click')
        .pipe(
            concatMap(() => this.saveCourse(this.from.value))
        )
        .subscribe();
    }

```

Prevent use from hitting the save button multiple times and trigger multiple parallel calls to backend. Ignore new values when previous observable is not completed. 
```ts
    @ViewChild('saveButton') saveButton: ElementRef;

    ngAfterViewInit() {
        fromEvent(this.saveButton.nativeElement, 'click')  // stream of click events
        .pipe(
            exhaustMap(() => this.saveCourse(this.from.value))
        )
        .subscribe();
    }

```

## Unsubscription In Detail - Implementing a Cancellable HTTP Observable

```ts
const interval$ = interval(1000);
const sub = interval$.subscribe(ronsole. Log) ;

// cancel the subscription after 5 seconds
setTimeout (() => sub.unsubscribe(),5000);
```

User want to cancel the previous search when types a new character
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



## Setting Up the Course Component
Search the source
```ts
    course$ : Observable<Course>;

    lessons$: Observable<Lesson[]>;

    ngOnInit() {
        const courseId = this.route.snapshot.params['id'];

        this.course$ = createHttpObservable(`/api/course/${courseId}`);

        this.lessons$ = createHttpObservable(`/api/lessons?courseId={courseId}&pageS`)
        .pipe(
            map(res => res['payload'])
        );
    }
```

## Building a Search Typeahead - debounceTime, distinctUntilChanged and switchMap Operators
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

    loadLessons(search=''): Observable<Lesson[]> {
        return createHttpObservable(`/api/lessons?filter={search}&pageSize=100`)
        .pipe(
            map(res => res['payload'])
        );
    }
```
