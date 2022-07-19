
const routes: Routes = [
  {path: '',        component: HomeComponent},               1
   {path: 'product', component: ProductDetailComponent}      2
];

export const routing = RouterModule.forRoot(routes);           3”
