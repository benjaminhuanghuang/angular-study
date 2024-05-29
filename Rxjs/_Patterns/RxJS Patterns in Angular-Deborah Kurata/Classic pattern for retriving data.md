# Classic pattern for retrieving data

What do you have?  Nothing.
What do you want?  we want a list of data
When do you want it? When page loaded


```ts
@Injectable({ providedIn: 'root' })
export class ProductService {
  private productsUrl = 'api/products';
  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(data =› console.log(JSON.stringify(data))),
      catchError(this.handleError)
      ) ;
    }
}
```

Ensure each Observable is subscribed
Ensure each subscription is unsubscribed

```ts
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  sub: Subscription;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe(
    products => this.products = products
    ) ;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
```

The better way: Use the async pipe. Async pipe automatically subscribes and unsubscribed

The template:

```html
<div *ngIf="products$ | async as products">
<button type='button' *ngFor='let product of products'>
  {{ product.productName }} ({{ product.category }})
</button>
</div>
```

The component

```ts
  products$ = this.productService.products$;
```

The service

```ts
products$ = this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(data =› console.log(JSON.stringify(data))),
      catchError(this.handleError)
      ) ;
```
