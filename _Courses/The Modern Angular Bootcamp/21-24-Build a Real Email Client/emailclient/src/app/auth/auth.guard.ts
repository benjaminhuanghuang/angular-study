import { CanMatchFn, Router } from '@angular/router';
import { skipWhile, take, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';


export const authGuard: CanMatchFn = (_route, _segments) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);
  return authService.signedin$.pipe(
    skipWhile((value) => value === null),
    take(1),
    tap((authenticated) => {
      if (!authenticated) {
        router.navigateByUrl('/auth/signin');
      }
    })
  );
};
