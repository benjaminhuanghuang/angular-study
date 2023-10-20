
https://itnext.io/custom-async-form-validator-in-angular-f42082a31e03

## Create custom validation
```
   ng g class auth/validators/UniqueUsername
```


## Validator class
```ts
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import {  timer } from 'rxjs';
import {  map, switchMap } from 'rxjs/operators';
import { UsernameService } from '../services/username.service';

export function userNameValidator(
    usernameService: UsernameService,
): AsyncValidatorFn {
    return (control: AbstractControl) => {
        return timer(500).pipe(
            switchMap(() =>
                usernameService.checkUserNameAvailable(control.value)
                .pipe(map((result: {exists: boolean}) => result.exists ? {asyncInvalid: true} : null)))
        );
    };
}
```

## Inject the validator into the form component
```ts
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ], [this.uniqueUsername.validate]),
  });

  constructor(
    private uniqueUsername: UniqueUsername,
    private authService: AuthService) { }
}
```
