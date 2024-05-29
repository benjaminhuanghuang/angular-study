# Retrieve Related Data Pattern

What do you have?  Have a product.
What do you want?  we want the supplier of the selected product.
When do you want it? When user pick a product

## One to One
  
```ts
selectedProduct$ = this.productSelectedAction$.pipe(
switchMap(id=>this.http.get<Product>(${this.url}/${id}'))
.pipe(
tap (data => console.log(data)),
catchError(this.handleError)
)) ;

productSupplier$ = this.selectedProduct$
.pipe(
switchMap (product =>
this.http.get<Supplier>(${this.sUrl}/${product.supplierId}'))
);
```

## One to Many

```ts
productSuppliers$ = this.selectedProduct$
.pipe(
switchMap (product =>
from (product.supplierIds)
.pipe(
  mergeMap(supplierId =>
      this.http.get<Supplier>(${this.sUrl}/${supplierId}')), 
  toArray ( ))  // convert Observable<Supplier> to Supplier[]
  )
);
```

Better way:

```ts
productSuppliers$ = this.selectedProduct$
.pipe(
switchMap (product =>
  forkJoin(
    product.supplierIds.map(supplierId =>
      this.http.get<Supplier>(${this.sUrl}/${supplierId}')))
  )
);
```
