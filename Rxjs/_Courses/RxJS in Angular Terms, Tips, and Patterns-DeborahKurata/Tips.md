# Tips

Marble diagrams aid in visualizing an observable.

Ensure each Observable is subscribed, Ensure each subscription is unsubscribed

```ts
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[];
  sub: Subscription;

  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this. sub = this.productService.getProducts().subscribe();
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();   // Unsubscribe to prevent memory leaks
  }
```

What do you have?
What do you want?
When do you want it?

## Tip: to respond to an action, use a Subject or BehaviorSubject to pass data from the component to the service.  
