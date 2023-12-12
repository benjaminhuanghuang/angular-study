## Angular-Signals
by Deborah Kurata
https://github.com/DeborahK/Angular-Signals



## Angular Signal vs BehaviorSubject
https://www.youtube.com/watch?v=a6XKMj-WRhM

- Simplified binding
- No need to subscribe
- Computed signals
- Improved change detection

observable:
```ts
  cartItems$ = this.cartService.cartItems$;
```

```html
<div *ngFor="let item of cartItems$ | async">
  <sw-cart-item [item]='item'></sw-cart-item>
</div>
```

cart-item.component.ts
```ts
  @Input() set item(item: CartItem) {
    this._item = item;
    this.itemChangedSubject.next(item);
  }

  private itemChangedSubject = new BehaviorSubject<CartItem>(this._item);
  items$ = this.itemChangedSubject.asObservable();

  exPrice$ = this.item$.pipe(
    map(it = it.quantity * Number(it.vehicle.cost_in_credits))
  );
```
cart-item.component.html
```html
<div class="card border-primary" *ngIf='item$ | async as item'>
</div>
```

Signal
cart-item.component.ts
```ts
  @Input() set item(item: CartItem) {
    this._item = item;
    this.cartItem.set(item);
  }

  cartItem = signal(this._item); 

  exPrice = computed(() => {
    return this.cartItem().quantity * Number(this.cartItem().vehicle.cost_in_credits);
  });
```
cart-item.component.html
```html
<div class="card border-primary" *ngIf='cartItem()'>
</div>
```
