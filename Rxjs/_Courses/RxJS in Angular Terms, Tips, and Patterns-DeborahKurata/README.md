# RxJS in Angular: Terms, Tips, and Patterns 

by Deborah Kurata
https://www.youtube.com/watch?v=vtCDRiG__D4

## RxJS Patterns

- Declarative Data Access Pattern
- Retrieve on Action Pattern
- Shape on Action Pattern
- Retrieve Related Data Pattern

## Observable

A collection of items `over time`.

- Unlike an array, it doesn't retain items.
- It emits items can be observed over time.
- like a drive-up window

Why use Observables?

- Things that arrive over time
  - UI event: Key press, Mouse movement, Button clicks
  - Http responses
  - Notifications
  - Async data

It does nothing until a consumer subscribes to it. When a observable is subscribed, it starts emitting items or notifications to the consumer.

## Angular Creates Observables

Routing emits parameters via a paramMap Observable

FormControl emits value via a valueChanges Observable

Http client emits the response via an Observable

```ts
getProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.productUrl);
}
```


https://github.com/DeborahK/Angular-ActionStreams
https://github.com/DeborahK/toh
