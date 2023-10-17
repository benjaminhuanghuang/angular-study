
The folder structure will look like this:
```
  src/app/MODULE_NAME
  ├── COMPONENT_NAME
  │   ├── COMPONENT_NAME.component.css
  │   ├── COMPONENT_NAME.component.html
  │   ├── COMPONENT_NAME.component.spec.ts
  │   └── COMPONENT_NAME.component.ts
  ├── MODULE_NAME-routing.module.ts
  ├── MODULE_NAME.module.ts
```

Define the routing rules in the routing module MODULE_NAME-routing.module.ts
```ts
import { MyComponent } from 'MODULE_NAME/COMPONENT_NAME';

const routes: Routes = [
  {
    path: 'PATH',
    component: MyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
```


The AppModule should import a module instead of the the component in a module.
When it import a module, it also loads the routing rules defined in the routing module.
