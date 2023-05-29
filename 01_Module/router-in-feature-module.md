recipes-routing.module.ts
```
const routes: Routes = [

]


@NgModule({
  imports: [RouterModule.forChild(routes)]  // 
  exports: [RouterModule]
})


```


recipes.module.ts

```
imports: [RouterModule, CommonModule, RecipesRoutingModule]  // 

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'recipes', component: RecipesComponent }
  ])]  
  exports: [RouterModule]
})
```


app-routing.module.ts
```
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)] // 
  exports: [RouterModule]
})
```


app.module.ts
```
imports: [
  ...,
  RecipesModule
]
```