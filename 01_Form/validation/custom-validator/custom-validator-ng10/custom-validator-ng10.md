## Class-Based Custom Sync Validator
- Create a new class to implement your custom validator
- [Optional] Have the class implement the "Validator' interface
- Add a 'validate' method to the class, which will be called with a FormGroup or FormControl
- Validator method should return 'null' if everything is OK, or an object if something is wrong

## Create validator class
```
  ng g class auth/validators/MatchPassword
```

## The validator class
```ts
import { FormGroup, Validator } from '@angular/forms'; // validator = interface
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
    validate(formGroup: FormGroup): null | {} {
        const { password, passwordConfirmation } = formGroup.value;
        if (password === passwordConfirmation) {
            return null;
        } else {
            return { passwordsDontMatch: true };
        }
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
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    passwordConfirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  }, { validators: [this.matchPassword.validate] });
```

## Show error in template
```html
  <p *ngIf="authForm.errors.passwordsDontMatch">
      Passwords must match
  </p>
```
