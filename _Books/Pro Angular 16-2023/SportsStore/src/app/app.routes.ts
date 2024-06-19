import { Routes } from '@angular/router';
//
import { CartDetailComponent } from "./store/cartDetail.component";
import { CheckoutComponent } from "./store/checkout.component";
import { StoreComponent } from "./store/store.component";
import { StoreFirstGuard } from './storeFirst.guard';

export const routes: Routes = [
  { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard] },
  { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard] },
  { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
  { path: "**", redirectTo: "/store" }
];
