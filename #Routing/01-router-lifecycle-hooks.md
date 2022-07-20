## route guards

- CanDeactivate

  Runs before a user can leave the current route. This is useful
  for prompting the user if they have any unsaved forms or other unfinished
  activities.

- CanActivateChild

  For any route that has child routes defined, this hook runs
  first. This is useful if a feature has some sections that are restricted to users based
  on permissions.

- CanActivate

  This hook must return true for the route to continue loading.
  Like with CanActivateChild, this hook is useful for keeping unauthorized users
  from loading application features.

- Resolve
  If a user is allowed to activate the attempted route, the resolve
  method is used to load data prior to activating the route itself. The data is then
  available from the ActivatedRoute service in the routed components.

## Sample

auth-guard.service.ts

```

import {
CanActivate,
ActivatedRouteSnapshot,
RouterStateSnapshot,
Router,
CanActivateChild
} from '@angular/router';

import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
// call API
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
constructor(private authService: AuthService, private router: Router) {}

canActivate(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean {
return this.authService.isAuthenticated().then((authenticated: boolean) => {
if (authenticated) {
return true;
} else {
this.router.navigate(['/']);
return false;
}
});
}

canActivateChild(
route: ActivatedRouteSnapshot,
state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean {
return this.canActivate(route, state);
}
}

```

app-routing-module.ts

```

{
path: 'servers',
// canActivate: [AuthGuard],
canActivateChild: [AuthGuard]
}

```
