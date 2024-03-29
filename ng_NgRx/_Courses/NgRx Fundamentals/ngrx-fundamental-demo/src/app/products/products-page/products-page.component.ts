import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Store } from '@ngrx/store';
import { ProductsAPIActions, ProductsPageActions } from '../state/products.actions';
import { selectProducts, selectProductsErrorMessage, selectProductsLoading, selectProductsShowProductCode, selectProductsTotal } from '../state/products.selectors';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent {
  products$ = this.store.select(selectProducts);
  total$ = this.store.select(selectProductsTotal);
  loading$ = this.store.select(selectProductsLoading);
  showProductCode$ = this.store.select(selectProductsShowProductCode);
  errorMessage$ = this.store.select(selectProductsErrorMessage);

  constructor(private store: Store) {
    this.store.subscribe(state => console.log('state', state));
  }

  ngOnInit() {
    this.store.dispatch(ProductsPageActions.loadProducts());
  }


  toggleShowProductCode() {
    //this.showProductCode = !this.showProductCode;
    this.store.dispatch(ProductsPageActions.toggleShowProductCode());
  }
}
