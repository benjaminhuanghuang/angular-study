Router Store adds bindings to connect the Angular Router with NgRx Store.
```bash
  npm i @ngrx/router-store
```

```ts
  import { StoreRouterConnectingModule } from '@ngrx/router-store';

  StoreRouterConnectingModule.forRoot()
```

Add selector
```ts
export const selectProductById = (id: string) =>
  createSelector(selectProducts, (products) =>
    products.find((product) => product.id === parseInt(id))
  );
```

In component
change
```ts
const productId = parseInt(this.activatedRoute.snapshot.params['id']);
this.getProduct(productId);
```
to
```ts
  product$ = this.store.select(selectProductById(this.activatedRoute.snapshot.params['id']));
```


Approach 2
The selector
```ts
export const { selectRouteParams } = getRouterSelectors();
export const selectProductById = createSelector(
  selectProducts,
  selectRouteParams,
  (products, { id }) => products.find((product) => product.id === parseInt(id))
);
```
In component
```ts
  product$ = this.store.select(selectProductById);
```
