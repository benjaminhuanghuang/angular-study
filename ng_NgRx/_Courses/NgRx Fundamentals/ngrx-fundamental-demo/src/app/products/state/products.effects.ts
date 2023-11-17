import { Injectable } from '@angular/core';
import { ProductsService } from '../products.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, exhaustMap, map, mergeMap, of } from 'rxjs';
import { ProductsAPIActions, ProductsPageActions } from './products.actions';


@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) { }

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.loadProducts),
      exhaustMap(() =>
        this.productsService.getAll().pipe(
          map((products) =>
            ProductsAPIActions.productsLoadedSuccess({ products })
          ),
          catchError((error) =>
            of(ProductsAPIActions.productsLoadedFail({ message: error }))
          )
        )
      )
    )
  );


  addProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.addProduct),
      mergeMap(({ product }) =>
        this.productsService.add(product).pipe(
          map((newProduct) =>
            ProductsAPIActions.productAddedSuccess({ product: newProduct })
          ),
          catchError((error) =>
            of(ProductsAPIActions.productAddedFail({ message: error }))
          )
        )
      )
    )
  );

  updateProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.updateProduct),
      mergeMap(({ product }) =>
        this.productsService.add(product).pipe(
          map((newProduct) =>
            ProductsAPIActions.productUpdatedSuccess({ product: newProduct })
          ),
          catchError((error) =>
            of(ProductsAPIActions.productUpdatedFail({ message: error }))
          )
        )
      )
    )
  );

  deleteProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsPageActions.deleteProduct),
      mergeMap(({ id }) =>
        this.productsService.delete(id).pipe(
          map(() =>
            ProductsAPIActions.productDeletedSuccess({ id })
          ),
          catchError((error) =>
            of(ProductsAPIActions.productDeletedFail({ message: error }))
          )
        )
      )
    )
  );

}
