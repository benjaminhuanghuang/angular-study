The @Component decorator has a providers property similar to the @NgModule decorator to register services with a component injector. A service that registers with the component injector can serve two purposes:

It can be shared with its child components
It can create multiple copies of the service every time the component that provides the service is rendered


## Multi instance service
When we provide a service through the component injector and inject it into the component’s constructor, a new instance is created every time the component is rendered on the page. It can come in handy in cases such as when we want to have a local cache service for each component. 
```ts
@Component({
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit {
  constructor(private productviewService: ProductViewService) { }
 }
```

Overriding providers in the injector hierarchy
```ts
@Component({
  providers: [
    { provide: ProductsService, useClass: ProductsService }
  ]
})
```

Providing services conditionally
```ts
export function favoritesFactory(isFavorite: boolean) {
  return () => {
    if (isFavorite) {
      return new FavoritesService();
    }
    return new ProductsService();
  };
}

@Component({
  providers: [
    { provide: ProductsService, useFactory: favoritesFactory(true) }
  ]
})
export class FavoritesComponent implements OnInit {
  constructor(private productService: ProductsService) { }
 
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}

```

InjectionToken 
```ts
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');


@Component({
  providers: [
    { provide: APP_CONFIG, useValue: appSettings }
  ]
})
export class AppComponent {
  constructor(@Inject(APP_CONFIG) config: AppConfig) {}
}
```
