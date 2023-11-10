## Overview
- Angular's built-in validators
- Adding validation to FormControls
- Displaying validation messages
- Handling multiple validators
- Creating custom validators
- Validating FromGroups


## Built in 
required: Requires a non-empty value
min:   Requires a numeric value >= provided number
max:   Requires a numeric value < provided number
minLength:   Requires a value of length >= provided minimum
maxLength:   Requires a value of length <= provided minimum
email:   Requires a valid email pattern
pattern:   Requires the value to match a regex pattern
requiredTrue:   Requires the value to be true

```ts

firstName: new FormControl('', Validators.required);


firstName: new FormControl('', [Validators.required, Validators.minLength(3)]);

```

## Error message
```html
<input formControlName="firstName" [class.error]="firstName.invalid && firstName.touched" placeholder= "First Name"/>
<em *ngIf="contactForm.controls.firstName.invalid && contactForm.controls.firstName.touched">
  Please enter a First Name
</em>

<em *ngIf="firstName.errors?.required && firstName.touched">Please enter a First Name</em>
```

Group validation
```html
<em *ngIf="contactForm.controls. address. invalid && contactForm.controls address.dirty">Incomplete Address</em>

```

## Disable
```html
<div class="buttons">
  <button class="secondary">Cancel</button>
  <button type="submit" class="primary" [disabled]="contactForm. invalid">Save</button>|
</div>
```


## Custom validation
```ts

import { AbstractControl, ValidationErrors } from "@angular/forms";

export function restrictedWordsvalidator (control: AbstractControl): ValidationErrors | null {
  return control.value. includes ('foo') ? { restrictedWords: true }  : null;
}
```
