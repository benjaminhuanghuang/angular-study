## auth-routing.module.ts
```ts
const routes: Routes = [
  { path: 'signout', component: SignoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: SigninComponent }
];
```

## Show different links based on authentication status
```html
<div class="right menu">
  <ng-container *ngIf="(signedin$ | async)">
    <a class="ui item" routerLink="/inbox" routerLinkActive="active">Inbox</a>
    <a class="ui item" routerLink="/signout" routerLinkActive="active">Sign Out</a>
  </ng-container>
  <ng-container *ngIf="!(signedin$ | async)">
    <a class="ui item" routerLink="/" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Sign In</a>
    <a class="ui item" routerLink="/signup" routerLinkActive="active">Sign Up</a>
  </ng-container>
</div>
```
