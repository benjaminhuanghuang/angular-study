# Declarative Pattern for Getting Data from an Observable
https://www.youtube.com/watch?v=0XPxUa8u-LY


Product service
```ts
  private productsUrl = 'api/products';

  products$ = this.http.get<Product[]>(this.productsUrl)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
```


Product list component
```ts
  products$ = this.productService.products$;
```
