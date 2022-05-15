
```
import {Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];
```