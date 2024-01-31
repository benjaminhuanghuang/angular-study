## Filter = Data stream + Action stream
put the filter in component.
```ts
products$ = this.productService.productsWithCategory$.pipe(
  catchError (err => {
      this.errorMessage = err;
      return EMPTY;
  }
) ;

categories$ = this.productCategoryService.productCategories$.pipe(
  catchError (err => {
    this.errorMessage = err;
    return EMPTY;
  })
);

productsSimpleFilter$ = this.productService.productsWithCategory$.pipe(
mар(
    products =>
      products.filter(product => this.selectedCategoryId ? product.categoryId === this.selectedCategoryId : true )
  )
);
```

### Creating an Action Stream (Subject / BehaviorSubject)
```ts
private categorySelectedSubject = new BehaviorSubject<number>(0);  // 0 is the init value
categorySelectedAction$ = this.categorySelectedSubject.asObservable();

onSelected(categoryId: string): void {
  this.categorySelectedSubject.next(+categoryId);
}

products$ = combineLatest ([
  this.productService.products$,
  this.categorySelectedAction$
])
.pipe(
  map(([products, categoryId]) =>
    products. filter(product => categoryId ? product.categoryId === categoryId : true
  ))
);

```

```html
<select (change)="onSelected($event.target.value)">
  <option *ngFor="let category of categories$ | async"
    [value]="category.id">{{ category.name }}
  </option>
</select>
```
