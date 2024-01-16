# Modules and Optimization

## What is Angular Module
Modules are ways of bundling Angular building blocks together
Angular modules define all building blocks your app uses: Components, Directives, Services

Every Angular app needs at least one module: AppModule

Angular analyzes NgModules to "understand" your application and its features

Core Angular features are included in Angular modules (e.g. FormsModule) to load them only when needed

```ts
@NgModule({
  declarations: [
    // declare the component, directive can be used in the templates or routes
    HomeComponent,
    PlaceHolderDirective
  ],
  imports: [
    // import other modules into this module
    // import a module, will add the declarations in that module
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // define all the services
    // Any service you plan to injecting, needs to be provided, and typically to this in AppModule 
    // or add @Injectable({providedIn: 'root'}) on the service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
## RecipesModule
Move the recipes related components, from app.module.ts to recipes/recipes.module.ts

## Add router to feature module

Create a recipes-routing.module.ts
Import it in recipes.module.ts

## Add Auth feature module
Add auth/auth.module.ts

Move some components from app.module.ts to auth.module.ts

Add AuthModule to imports[] in app.module.ts

Move the route into auth.module.ts
```ts
  RouterModule.forChild([{ path: 'auth', component: AuthComponent }])
```

## Lazy Loading
add route for the lazy loading module in app-routing.module.ts
```ts
  // Older than angular 9
  { path: 'recipes', loadChildren: './recipes/recipes.module.ts#RecipesModule' },

  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipes/recipes.module').then(module => module.RecipesModule)
  },
```
