# Observable 
A collection of items `over time`. Unlike an array, it doesn't retain items. It emits items can be observed over time. 
For example, Key press, Mouse move, Http response, Notifications, etc.

Observable provides support for delivering messages between different parts of your single-page application. 

It is responsible for handling multiple values, asynchronous programming in Javascript, and also event handling processes.

When a observable is subscribed, it starts emitting items or notifications to the consumer

Angular creates Observables:
- Routing emits parameters via a paramMap Observable

- FormControl emits value via a valueChanges Observable

- Http client emits the response via an Observable
```ts
// Service
getProducts(): Observable<Product[]> {
  return this.http.get<Product|]>(this.productUr1);
}

// Component
ngOnInit(): void {
  this.productService.getProducts();
}
```
