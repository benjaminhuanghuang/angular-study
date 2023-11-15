# RxJS Patterns
https://app.pluralsight.com/course-player?courseId=19b39129-76d8-46fb-9dc0-19bb718b5fa4


## Tip 1:
- What do you have?  we have nothing when start
- What do you want?  we want a list of data 
- When do you want it? When page loaded

retriving-data.ts

## Tip 2:
- Ensure each Observable is subscribed AND unsubscribed

comment.ts



## Tip 3:
- Use the async pipe. Async pipe automatically subscribes and unsubscribed

```
    products$ = this.http.get<Product[]>(`${this.productsUrl}?cat=${catId}`).pipe(
            tap(data => console.log(JSON.stringify(data))), 
            catchError(this.handleError)
``` 

## Tip 4:
To respond to an action use a Subject or BehaviorSubject

```
    private categorySubject = new Subject<number>();
    categorySelectedAction$ = this.categorySubject.asObservable();
    
    private categorySubject = new BehaviorSubject<number>(1);
    categorySelectedAction$ = this.categorySubject.asObservable();
```

Emitting a value
```
    private categorySubject = new Subject<number>();
    categorySelectedAction$ = this.categorySubject.asObservable();
    
    selectedCategoryChanged(categoryId: number): void {
        this.categorySubject.next(categoryId)
    }
```


## Tip 5: 
Leverage IDE

## Tip 6: 
To subscribe to an inner Observable and flatten the result, use a higher-order mapping operator


```
    private categorySubject = new Subject<number>();
    categorySelectedAction$ = this.categorySubject.asObservable();

    products$ = this.categorySelectedAction$.pipe(
        switchMap(catId=>this.http.get<Product[]>(`${this.productsUrl}?cat=${catId}`))
            .pipe(
                tap(data => console.log(JSON.stringify(data))), 
                catchError(this.handleError)
    ));
```
