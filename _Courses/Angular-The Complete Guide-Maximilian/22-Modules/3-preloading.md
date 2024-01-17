## Preloading Lazy Loaded code
Using preloadingStrategy in app-routing.module.ts
```ts
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
})
```
