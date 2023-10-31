Procedural approach: errors handled in the subscribe
```ts
this.productService.getProducts()
.subscribe ( {
next: products => this.products = products,
error: err => this.errorMessage = err
}) ;
```

Declarative approach: errors handled in the pipeline
```ts
products$ = this.productService.products$
.pipe(
  catchError(err =>
  {
  this.errorMessage = err;
  return EMPTY;
  })
);
```
