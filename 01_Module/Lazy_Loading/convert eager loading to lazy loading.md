1. lazy load the feature module in application's routes
app-routing.module.ts
change
```ts
const routes: Routes = [
  { path: 'catalog', component: CatalogComponent, },
  { path: 'users register', component: RegisterComponent, },
  { path: 'users sign-in', component: SignInComponent, },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];
```
to
```ts
const routes: Routes = [
  { path: 'catalog', component: CatalogComponent, },
  { path: 'users', loadChildren: () => import('/users/users.module').then(m=> m.UsersModule), },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];
```

The feature module need a routing module to define its sub routes.
user-routing.module.ts
```ts
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'sign-in', component: SignInComponent }
];
```

import user-routing.module.ts in user.module.ts

stop loading the user module eagerly in app.module.ts
