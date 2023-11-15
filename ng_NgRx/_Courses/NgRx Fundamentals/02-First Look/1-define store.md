

## Eager loaded global state

AppModule.ts
```ts
import { StoreModule } from '@ngrx/store';

@NgModule ({
imports: [
  StoreModule. forRoot ({/*pass in the reducers we want to register*/})
]})
export class AppModule {}
```


## Register lazy loaded feature state

ProductsModule.ts
```ts
import { StoreModule } from '@ngrx/store';
import { productsReducer} from 'products.reducer';
@NgModule({
imports: [
  StoreModule. forFeature('products', productsReducer)
]})
export class ProductsModule
```


## Use the store
```ts
import { Store } from '@ngrx/store';

constructor(private store: Store) {
  this.store.subscribe(state => console.log('state', state));
}
```
