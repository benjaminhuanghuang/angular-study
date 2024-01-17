
## Lazy Loading
add route for the lazy loading module in app-routing.module.ts
```ts
  // Older than angular 9
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },

  // Angular 9+
  {
    path: 'recipes',
    loadChildren: () =>
      // define the module to be loaded
      import('./recipes/recipes.module').then(module => module.RecipesModule)
  },
```

Remove RecipesModule from imports[] in app.module.ts, since it is lazy loaded

Add a recipe-routing.module.ts inside the recipe module


## Lazy Loading for ShoppingListModule
shopping-list-routing.module.ts
The path is '' in the routing module inside the lazy loaded module

shopping-list.module.ts

Add router for lazy loading in app-routing.module.ts
```ts
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./shopping-list/shopping-list.module').then(
        module => module.ShoppingListModule
      )
  },
```
Remove ShoppingListModule from imports[] in app.module.ts
