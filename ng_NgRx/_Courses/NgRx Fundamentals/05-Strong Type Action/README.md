## Name convention for Action
```ts

  {          
    type: '[Event source and category] <action>'
    payload: {}
  }
```

## Rules to Writing Good Actions
Write them upfront
Divide by event source
Many specific actions
Capture events not commands
Descriptive debug logs

## Action Creators
```ts
import { createAction, createActionGroup } from 'Ongrx/store';

createAction('[Event source and category] <action>', props<{ payload }>());

// create a dictionary of actions
export const ProductsPageActions = createActionGroup({
  source: 'Products Page',
  events: {
    'Load Products': props<{ payload }>(),
    'Update Product': props<{ payload }>(),
  }
});
```


## Shared and Strongly Typed Actions
```ts
import { ProductPageActions } from '../state/products.actions';

toggleShowProductCode () {
  this.store.dispatch(ProductPageActions.loadProducts());
}
```
