## Angular Validator


```ts
import { FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ])
  });

  constructor() { }
}

```

The html template
```html
<form class="ui form" [formGroup]="authForm">
  <div class="field">
    <label>Username</label>
    <input formControlName="username">
  </div>
  {{authForm.get('username').errors | json}}
  <button class="ui sumit button primary">Sign Up</button>
</form>

```
