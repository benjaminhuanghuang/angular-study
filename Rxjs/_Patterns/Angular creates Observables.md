# Angular creates Observables:

Routing emits parameters via a paramMap Observable

FormControl emits value via a valueChanges Observable

Http client emits the response via an Observable
```ts
// Service
getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.productUrl);
}

// Component
ngOnInit(): void {
  this.productService.getProducts();
}
```
