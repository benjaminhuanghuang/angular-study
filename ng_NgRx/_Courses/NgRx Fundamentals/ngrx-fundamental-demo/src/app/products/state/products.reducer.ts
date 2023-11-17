import { createReducer, on } from '@ngrx/store';
import { ProductsAPIActions, ProductsPageActions } from './products.actions';
import { Product } from '../product.model';

export interface ProductsState {
  showProductCode: boolean;
  loading: boolean;
  products: Product[];
  errorMessage: string;
}


const initialState: ProductsState = {
  showProductCode: true,
  loading: false,
  products: [],
  errorMessage: ''
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
  })),

  on(ProductsAPIActions.productsLoadedFail, (state, { message }) => ({
    ...state,
    products: [],
    errorMessage: message,
    loading: false,
  })),

  on(ProductsPageActions.deleteProduct, (state) = ({
    ...state,
    loading: true,
    errorMessage: '',
  })),
  on(ProductsAPIActions.productDeletedSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    products: state.products.filter(
      (existingProduct) = existingProduct.id !== id
    ),
  })),
  on(ProductsAPIActions.productDeletedFail, (state, { message }) => ({
    ...state,
    loading: false,
    errorMessage: message
  }))
);
