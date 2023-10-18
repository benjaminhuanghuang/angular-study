## Class-Based Custom Sync Validator
- Create a new class to implement your custom validator
- [Optional] Have the class implement the "Validator' interface
- Add a 'validate' method to the class, which will be called with a FormGroup or FormControl
- Validator method should return 'null' if everything is OK, or an object if something is wrong

Create validator class
```
   ng g class auth/validators/MatchPassword 
```

validator
```ts

import { Validator, FormGroup } from '@angular/forms';

export class MatchPassword implements Validator {
   validate(formGroup: FormGroup) {
      const { password, passwordConfirmation} = formGroup.value;

      if (password === passwordConfirmation) {
      return null;
      } else {
      return { passwordsDontMatch: true };
      }
   }
}
```
