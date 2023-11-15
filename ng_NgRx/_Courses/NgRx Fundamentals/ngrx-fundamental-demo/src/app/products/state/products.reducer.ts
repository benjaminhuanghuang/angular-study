import { createAction, createReducer, on } from '@ngrx/store';

export interface ProductState {
  showProductCode: boolean;
}


const initialState: ProductState = {
  showProductCode: true
}

export const productsReducer = createReducer(
  initialState,
  // handle the action
  on(createAction('[Product] Toggle Product Code'), state => {
    //console.log('original state: ' + JSON.stringify(state));
    return {
      ...state,
      showProductCode: !state.showProductCode
    };
  })
);
