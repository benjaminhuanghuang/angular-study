
## Terms
###  Observable: 
A collection of items `over time`. Unlike an array, it doesn't retain items. It emits items can be observed over time. 
For example, Key press, Mouse move, Http response, Notifications, etc.

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

### Subscription:
An object that represents the `execution` of an Observable. It is primarily useful for cancelling the execution.
```ts
  this.productService.getProducts().subscribe();
```

Component
```ts
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  sub: Subscription;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe();
  }

  ngOnDestroy(): void {
    this.sub. unsubscribe();
  }
}
```


## Observer
Observer watches th emissions and notification

Observer is a object with 3 methods
```ts
// Define an explicit observer (uncommon)
const observer = {
  next: apple => console.log( Apple was emitted ${apple} ),
  error: err => console.log( Error occurred: ${err}),
  complete: () => console.log('No more apples, go home')
};

// Pass the observer object to the subscribe method
const sub = source$.subscribe(observer);
```

```ts
// Pass the next function to the subscribe method
const sub = source$.subscribe(
  apple => console.log( Apple was emitted ${apple} )
);
```

## Pipe
Transforms each emitted item
tap: Taps into the stream without changing it
тар: Basic transformation
catchError: Catches errors
```ts
const sub = source$.pipe(
    tap(apple => console.log(apple)),
    map(apple => addToJuicer(apple))
  ).subscribe();

this.sub.unsubscribe();
```

## Subject or BehaviorSubject
Are special types of observables. They are both Observables and Observers. They can emit items and subscribe to other Observables.
BehaviorSubject allows us to have a default value. It will always emit the `last / most recent` value to new subscribers.
```ts
private categorySubject = new Subject<number>();
categorySelectedAction$ = this.categorySubject.asObservable();

private categorySubject = new BehaviorSubject<number>(1);
categorySelectedAction$ = this.categorySubject.asObservable();
```
