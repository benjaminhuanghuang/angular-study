import { createAction, createReducer, on } from '@ngrx/store';
import { ProductsPageActions } from './products.actions';

export interface ProductState {
  showProductCode: boolean;
}

const initialState: ProductState = {
  showProductCode: true
}

export const productsReducer = createReducer(
  initialState,
  // handle the action
  on(ProductsPageActions.toggleShowProductCode, state => {
    //console.log('original state: ' + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);
