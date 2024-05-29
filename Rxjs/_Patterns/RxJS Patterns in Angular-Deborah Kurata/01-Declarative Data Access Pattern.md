# Declarative Data Access Pattern

What do you have?  Nothing.
What do you want?  we want a list of data
When do you want it? When page loaded

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
