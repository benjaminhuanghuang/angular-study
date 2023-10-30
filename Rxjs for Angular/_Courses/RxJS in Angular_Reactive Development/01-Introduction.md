Rxjs Observe and React to Data as It Flows through Time
- Emit items
- React to each emitted item
  - Transform
  - Filter
  - Modify
- Combine
- Cache

## Why RxJS?
One technique to rule them all
Compositional
Handles errors
Watchful
Lazy
Cancellable

## RxJS in Angular

Product service
```ts
  private productsUrl = 'api/products';

  products$ = this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
```

Product list component
```ts
  products$ = this.productService.products$;
```

Routing
```ts
    this.route.paramMap
    this.route.data
    this.route.events
```


Reactive Forms
```ts
    this.productForm.valueChanges
```


HttpClient
```ts
    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.url);
    }
```

## Imperative vs reactive
Value is assigned when the expression is first evaluated
vs
React to changes Changes are propagated


## Reactive Development
Code is reactive when an input change leads to an automatic change in output

React to user actions

React to state changes

Combine data streams

Communicate between components

Be resilient to failure

Manage state
