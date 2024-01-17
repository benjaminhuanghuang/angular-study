1. Create module
```ts
@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    // Add child routes later...
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
```

2. Change the route
```ts
export const appRoutes : Routes = [
  { path: 'users/register', component: RegisterComponent,},
  { path: 'users/sign-in', component: SignInComponent, },
];
```
to
```ts
export const appRoutes : Routes = [
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
];
```

3. Crate child routes
```ts
@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      // No need to add 'users' prefix in the child routes
      { path: 'register', component: RegisterComponent,},
      { path: 'sign-in', component: SignInComponent, },
    ]),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UsersModule { }
```
