
Modules that are lazily loaded will only be loaded when the user `navigates to their routes`.

```
const routes: Routes = [
  { path: '', redirectTo: 'eager', pathMatch: 'full' },
  { path: 'eager', component: EagerComponent },
  { path: 'lazy',  loadChildren: () => import('lazy/lazy.module').then(m => m.LazyModule) }
];
```

For the lazy loading module use the property `loadChildren` instead of component.
We pass a function, that utilizes the import method that webpack utilizes to handle lazy loading, where we pass in the path to the module
This import returns us a promise that has access to the exported values in that import path above, and we simply have to make sure that function returns the module in question

From (https://angular-training-guide.rangle.io/modules/lazy-loading-module)
