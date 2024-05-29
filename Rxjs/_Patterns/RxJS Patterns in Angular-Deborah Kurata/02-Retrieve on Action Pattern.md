# Retrieve on Action Pattern

What do you have?  User pick a category.
What do you want?  we want a products for that category
When do you want it? When user pick a category. We have an action user picking a category

To respond to an action use a Subject or BehaviorSubject

```ts
    private categorySubject = new Subject<number>();
    categorySelectedAction$ = this.categorySubject.asObservable();
    
    selectedCategoryChanged(categoryId: number): void {
        this.categorySubject.next(categoryId)
    }
```

```ts
    private categorySubject = new BehaviorSubject<number>(1);    // consumer will get the default value or the last value
    categorySelectedAction$ = this.categorySubject.asObservable();
```

To subscribe to an inner Observable and flatten the result, use a higher-order mapping operator

Higher-Order Mapping Operators
switchMap: Stops the current operation and performs the new operation
concatMap: Performs each operation one at a time, in order
mergeMap: Performs each operation concurrently

```ts

private categorySubject = new Subject<number>();
categorySelectedAction$ = this.categorySubject.asObservable();

products$ = this.categorySelectedAction$.pipe(
  switchMap(catId=›this.http.get<Product[]>(${this.url}?cat=${catId}'))
    .pipe(
      tap(data =› console.log(data)),
      catchError(this.handleError)
    )) ;
);
  
```
