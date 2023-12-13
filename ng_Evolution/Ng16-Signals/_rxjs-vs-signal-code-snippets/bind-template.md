
Signal
```html
  <option *ngFor="let q of qtyArr()">{{ q }}</option>


  <button type="button"
    class="list-group-item"
    *ngFor="let user of users()"
    [ngClass]="{'active': user?.id === selectedUserId()}"
    (click)="onSelected(user.id)">
      {{user.name }}
  </button>

```

Rxjs
```html
  <option *ngFor="let q of qtyArr$ | async">{{ q }}</option>
```
