## Implementing Lazy Loading
- Choose which modules should be lazy loaded
- For each of those modules, remove any import statements for those modules from anywhere else in your project
- In the AppRoutingModule, define a Route in the 'routes' array to specify when to load up that module
- In your lazy loaded module's Routing file, edit the 'path' of each route to be relative to the path you specified in the 'AppRoutingModule'


The app.module.ts
```ts
@NgModule ({
  declarations: []
  imports: [BrowserModule, AppRoutingModule],    // remove the import of the lazy loaded module
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```


The app-routing.module.ts
```ts
const routes: Routes = [
   // loadChildren() is invoked when user access the path
  { path: 'elements', loadChildren: () => import('./PATH/LazyLoadingModule').then((m)=>m.ElementsModule) },  
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

```

The elements-routing.module.ts
```ts
  const routes: Routes = [
    { path: '', component: ElementsComponent },   // The path should be relative to the path you specified in the 'AppRoutingModule'
  ];
```
