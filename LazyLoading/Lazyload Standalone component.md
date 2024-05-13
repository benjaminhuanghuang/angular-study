# Lazyload Standalone Components

app.routes.ts

```ts
import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

export const routes: Routes = [
{
  path: 'first-component',
  component: FirstComponent,
},
{
  path: 'second-component',
  loadComponent: () → import ('./second/second.component'). then ((c) => c.SecondComponent); // Lazy load the component
}
];
```

## Sample

projects\angular17-student-record
