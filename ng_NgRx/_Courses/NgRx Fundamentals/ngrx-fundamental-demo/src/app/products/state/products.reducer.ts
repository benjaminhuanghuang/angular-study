import { createReducer, on } from '@ngrx/store';
import { ProductsAPIActions, ProductsPageActions } from './products.actions';
import { Product } from '../product.model';

export interface ProductsState {
  showProductCode: boolean;
  loading: boolean;
  products: Product[];
}


const initialState: ProductsState = {
  showProductCode: true,
  loading: false,
  products: [],
};


export const productsReducer = createReducer(
  initialState,
  // handle the action
  on(ProductsPageActions.toggleShowProductCode, state => {
    //console.log('original state: ' + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  }),

  on(ProductsPageActions.loadProducts, (state) => ({
    ...state,
    loading: true,
  })),

  on(ProductsAPIActions.productsLoadedSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products
  }))
);
