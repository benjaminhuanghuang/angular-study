## Create custom validation
```
   ng g class auth/validators/UniqueUsername
```


## Validator class
```ts
import { AsyncValidator, FormControl } from '@angular/forms'; // validator = interface
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
    constructor(private authService: AuthService) { }

    validate = (control: FormControl) => {
        const { value } = control;
        // Call api 
        return this.authService.usernameAvailable(value).pipe(
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
    }
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
    private router: Router,
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService) { }
}
```
