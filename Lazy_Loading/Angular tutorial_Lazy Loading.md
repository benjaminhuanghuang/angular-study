# Angular tutorial # Lazy Loading
Normal loading: All routes will load at the first time.

Create a admin module with routing
```
  ng g m admin --routing
```

Create login and list component
```
  ng g c admin/login
  ng g c admin/list
```

admin-routing.module.ts
```
const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'list', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
```



admin.module.ts
```
  console.warn('Lazy loading');  // Test the lazy loading

  @NgModule({
    declarations: [LoginComponent, ListComponent],
    imports: [
      CommonModule,
      AdminRoutingModule
    ]
  })
  export class AdminModule {}
```


app-routing.module.ts
Lazy loading
```
const routes: Routes = [
  path: "admin", loadChildren: ()=>import (' ./admin/admin.module').then (mod=>mod.AdminModule),
  path: "user", loadChildren: ()=>import (' ./user/user.module').then (mod=>mod.UserModule)
]:
@NgModule({
imports: [RouterModule. for Root (routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
```
