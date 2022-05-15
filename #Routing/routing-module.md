


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

