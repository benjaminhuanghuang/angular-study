## Replace BehaviorSubject with signal
https://www.youtube.com/watch?v=a6XKMj-WRhM

## Service
```ts
private vehicles$ = this.http.get<VehicleResponse>(this.url).pipe(
  ...  
);

// Expose signals from this service
vehicles = toSignal(this.vehicles$, {initialValue: [] as Vehicle[]});
```

## CartList component
```ts
// RxJS
cartItems$ = this.cartService.cartItems$;
```

```html
<div *ngFor="let item of cartItems$ | async">
  <cart-item [item]='item'></sw-cart-item>
</div>
```





## CartItem component
RxJS
```ts
_item!: CartItem;

get item() {
  return this._item;
}

@Input() set item(item: CartItem) {
  this._item = item;
  this.itemChangedSubject.next(item);
}

private itemChangedSubject = new BehaviorSubject<CartItem>(this.item);
item$ = this.itemChangedSubject.asObservable();
```

```html
<div class="card border-primary" *ngIf='item$ | async as item'>


</div>
```

Signal
```ts
_item!: CartItem;

get item() {
  return this._item;
  this.cartItem.set(item);
}

@Input() set item(item: CartItem) {
  this._item = item;
}

cartItem = signal(this.item);
```

```html
<div class="card border-primary" *ngIf='cartItem()'>


</div>
```


No need to subscribe to the signal
