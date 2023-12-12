
Signal
```html
  <option *ngFor="let q of qtyArr()">{{ q }}</option>
```

Rxjs
```html
  <option *ngFor="let q of qtyArr$ | async">{{ q }}</option>
```
