# Shape on Action Pattern

What do you have?  Have a products list.
What do you want?  we want the detail of the selected product.
When do you want it? When user pick a product

To work with multiple streams, use a combination operator

Combination Operators

- combineLatest: Emits a combined value when any of the Observables emit. Won't emit until all Observables have emitted at least once
- merge: Emits the one value when any of the Observables emit
- forkJoin: When all Observables complete, emit the last value from each Observable into an array

```ts
products$ = this.categorySelectedAction$.pipe(
switchMap(catId=>this.http.get<Product[]>('${this.url}?cat=${catId}*))
.pipe(
tap(data => console.log(data)),
catchError(this.handleError)
)) ;

private productSelectedSubject = new Subject<number>();
productSelectedAction$ = this.productSelectedSubject.asObservable();


selectedProduct$ = combineLatest([
this.products$,
this.productSelectedAction$
]).pipe(
  map(([products, selectedProductId]) =>
    products.find(product => product.id === selectedProductId)
  )
);
```
