import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
//
import { AuthService } from '../auth.service';

export function userNameValidator(authService: AuthService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const { value } = control;

    return authService.usernameAvailable(value).pipe(
      map((value) => {
        // if (value.available) {
        //     return null;
        // }
        // errors won't ever hit a map function, so we can be sure whatever is here is 200
        return null;
      }),
      catchError((err) => {
        // we always need to return an observable from catchError
        // of is a shortcut to create an observable, it will just emit that value and that's it
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
}
