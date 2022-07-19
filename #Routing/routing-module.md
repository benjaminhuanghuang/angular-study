If you declare routes for the root module, use the forRoot()

```
const appRoutes: Routes = [

];

@NgModule({
  // imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  // for old browsers support which not support the other way
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

If you’re configuring routes for a feature module (not for the root one), use the forChild() method, which also creates a router module but doesn’t create the router service (forRoot() should have created the service by now),

```
@NgModule({
  imports: [CommonModule,
            RouterModule.forChild(routes)]       1
     ...
})
export class MyFeatureModule {}

```
