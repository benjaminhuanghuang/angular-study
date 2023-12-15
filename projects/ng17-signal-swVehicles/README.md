## Angular-Signals
by Deborah Kurata

https://www.youtube.com/playlist?list=PLErOmyzRKOCr07Kcnx75Aqh6PWSbIokPB

- Angular Signals: What? Why? and How?
- How Angular Signals and RxJS Work Together
- Changes to Signal and RxJS interop in Angular RC 1
- Angular Signal vs BehaviorSubject
- Manage State with Angular Signals
- Unlocking the Power of Angular Signals + RxJS: Practical Applications
- RxJS + Signals: Big Picture
- Angular Signals: Where Do they Go?
- Working with Arrays in Angular Signals
- Using Angular Computed Signals for Cart Totals


How Angular Signals and RxJS Work Together
https://www.youtube.com/watch?v=5SD995zKvbk&list=PLErOmyzRKOCr07Kcnx75Aqh6PWSbIokPB&index=2


Manage State with Angular Signals
https://www.youtube.com/watch?v=04avEeicarQ


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

## Using Angular Computed Signals for Cart Totals
https://www.youtube.com/watch?v=kczkl2HndJg&list=PLErOmyzRKOCr07Kcnx75Aqh6PWSbIokPB&index=10

cart.service.ts
```ts
// Total up the extended price for each item
subTotal = computed(() => this.cartItems().reduce((a, b) =>
  a + (b.quantity * Number(b.vehicle.cost_in_credits)), 0));

// Delivery is free if spending more than 100,000 credits
deliveryFee = computed(() => this.subTotal() < 100000 ? 999 : 0);

// Tax could be based on shipping address zip code
tax = computed(() => Math.round(this.subTotal() * 10.75) / 100);
```

cart-total.component.html
