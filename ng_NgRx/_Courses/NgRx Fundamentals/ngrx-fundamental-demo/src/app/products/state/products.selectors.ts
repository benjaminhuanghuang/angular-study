import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.reducer';
import { sumProducts } from 'src/app/utils/sum-products';
import { getRouterSelectors } from '@ngrx/router-store';

export const selectProductsState = createFeatureSelector<ProductsState>('products');
export const selectProducts = createSelector(
  selectProductsState,
  (productsState) => productsState.products
);


export const selectProductsLoading = createSelector(
  selectProductsState,
  (productsState) => productsState.loading
);

export const selectProductsShowProductCode = createSelector(
  selectProductsState,
  (productsState) => productsState.showProductCode
);

export const selectProductsErrorMessage = createSelector(
  selectProductsState,
  (productsState) => productsState.errorMessage
);

export const selectProductsTotal = createSelector(selectProducts, sumProducts);

/* Approach 1
export const selectProductById = (id: string) =>
  createSelector(selectProducts, (products) =>
    products.find((product) => product.id === parseInt(id))
  );
*/

export const { selectRouteParams } = getRouterSelectors();
export const selectProductById = createSelector(
  selectProducts,
  selectRouteParams,
  (products, { id }) => products.find((product) => product.id === parseInt(id))
);
