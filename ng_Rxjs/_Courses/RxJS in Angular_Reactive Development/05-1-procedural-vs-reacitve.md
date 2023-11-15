## Procedural data retrieval pattern
```ts
  products: Product[] = [];

  ngOnInit(): void {
    this.sub = this.productService.getProducts()
      .subscribe({
        next: products => this.products = products,
        error: err => this.errorMessage = err
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
```
```html
<div *ngIf="products">
<table>
  <tr *ngFor="let product of products">
    <td>{{ product.productName }}</td>
    <td>{{ product.productCode }}</td>
  </tr>
</table>
```


## Reactive pattern
```ts
  products$: Observable<Product[]>;

  ngonInit(): void {
    this.products$ = this.productService.getProducts();
  }
```

```html
  <div *ngIf="products$ | async as products">
    <div *ngFor="let product of products">
      {{ product.productName }}
    </div>
  </div>
```

Subscribes to the Observable when component is initialized
Returns each emitted value
When a new item is emitted, component is marked to be checked for changes
Unsubscribes when component is destroyed
