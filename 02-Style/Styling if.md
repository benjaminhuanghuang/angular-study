## Add active style
```html
<button type="button" class="list-group-item" *ngFor="let user of users()"
    [ngClass]="{'active': user?.id === selectedUserId()}" 
    (click)="onSelected(user.id)">
    {{ user.name }}
</button>
```

##  Add the CSS class `selected` if isSelected(myProduct) returns true.
```html
<div class="ui items">
  <product-row *ngFor="let myProduct of productList"
    [product]="myProduct"
    (click)='clicked(myProduct)'
    [class.selected]="isSelected(myProduct)">
  </product-row>
</div>
```

```ts
isSelected(product: Product): boolean {
 if (!product || !this.currentProduct) { 
   return false;
 }
 
 return product.sku === this.currentProduct.sku;
}
```
