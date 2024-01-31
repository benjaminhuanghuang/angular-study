## Declarative data access pattern: Retrieving Data
Procedural Service  
```ts
@Injectable({ providedIn: 'root' })
export class ProductService {
  private productsUrl = 'api/products';

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
}
```
Declarative Service  
```ts
getProducts$ = this.http.get<Product[]>(this.productsUrl)
  .pipe(
    tap(data => console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
```

Component using Procedural Service 
```ts
ngOnInit(): void {
  this.sub = this.productService.getProducts().subscribe(
    products => this.products = products
  );
}

ngOnDestroy(): void {
  this.sub.unsubscribe;
}
```

Component using declarative Service 
```ts
  products$ = this.productService.getProducts$;
```
bind observable to template, the async will automatically subscribe and unsubscribe
```html
<div *ngIf="products$ | async as products">
  <button type='button' *ngFor='let product of products'>
    {{ product.productName }} ({{ product.category }})
  </button>
</div>
```


## Retrieve on Action Pattern: Retrieve data based on user selection, paging...
To respond to an action, use a Subject or BehaviorSubject to pass data from the component to the service.  
```ts
products$=this.http.get<Product[]>(`${this.url}?cat=${catId}`)
.pipe(
  tap(data => console.log(data)),
  catchError(this.handleError)
);
```

Higher-Order Mapping Operators
Automatically subscribe to the inner Observable
Flatten the resulting Observable
Returning Observable<T> not Observable<Observable<T>>
Automatically unsubscribe from the inner Observable

- switchMap: Stops the current operation and performs the new operation
- concatMap: Performs each operation one at a time, in order
- mergeMap: Performs each operation concurrently

```ts
private categorySubject = new Subject<number>();
categorySelectedAction$ = this.categorySubject.asObservable();

products$ = this.categorySelectedAction$.pipe(
  switchMap(catId=>this.http.get<Product[]>(${this.ur1}?cat=${catId}))
  .pipe(
    tap(data => console.log(data));
    catchError(this.handleError)
  ));
```

## Shape on Action Pattern: Filter, map, transform an Observable
To work with multiple streams, use a combination operator
- combineLatest Emits a combined value when any of the Observables emit. Won't emit until all Observables have emitted at least once
- merge Emits the one value when any of the Observables emit
- forkJoin When all Observables complete, emit the last value from each Observable into an array


## Retrieve Related Data Pattern: Retrieve data nad use ids to retrieve related data
