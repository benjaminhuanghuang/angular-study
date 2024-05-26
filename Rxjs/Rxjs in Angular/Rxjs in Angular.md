# Using RxJS in Angular

1. Use RxJS observable defining a data stream when you retrieve data using Angular's Http Get
   
2. Use RxJS to create stream for user actions such as mouse movements, and clicks

3. Merge data stream with an action stream to create a new stream bind it to the template and watch UI automatically update when user performs that action.
```ts
products$ = combineLatest ([
  this.productService.products$,
  this.action$
]).
pipe(
  map (([products, category]) =>
  products.filter (product => product. category === category)
  )
) ;
```
