```
  <li *ngFor="let foobar of names">Hello {{ foobar }}</li>
```

## Pass to child component
```
<li *ngFor="let individualUserName of names">
  <app-user-item [name]="individualUserName"></app-user-item>
</li>
```
