## Reducer
Define the reducer for feature module

products\state\products.reducer.ts
```ts
import { createAction, createReducer, on } from '@ngrx/store';

export const productsReducer = createReducer (
  { showProductCode: true },    // initial state
  // handle the action
  on(createAction('[Product] Toggle Product Code'), state => {
    //console.log('original state: ' + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
```

Use the reducer in the feature module
```ts
 imports: [
    CommonModule,
    StoreModule.forFeature('products', productsReducer),
  ]
```

Dispatch
```ts
  checkChanged(): void {
    this.store.dispatch({type: 'Action Name'});
  }
```

Selector
```ts
showProductCode$ = this.store.select((state: any) => state.products.showProductCode);
```
