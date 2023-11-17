

Selectors are pure functions used for obtaining slices of store state

Benefits of Selectors
- Portability
- Testability
- Memoization
- Composition: mix with other selector
- Туре Safety

The `any` approach
```ts
  products$ = this.store.select((state: any) => state.products.products);
```

The type safe approach
```ts
  products$ = this.store.select(selectProducts);
```
