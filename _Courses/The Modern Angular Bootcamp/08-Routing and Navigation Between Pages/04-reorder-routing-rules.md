

Do not put the `wildcard` route at the top of the list of routes.

The app.module.ts
```ts
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Angular will add the routing rules from each of the modules in the 
    ElementsModules,  // same order that they are imported here
    CollectionsModule
  ],
})
```
