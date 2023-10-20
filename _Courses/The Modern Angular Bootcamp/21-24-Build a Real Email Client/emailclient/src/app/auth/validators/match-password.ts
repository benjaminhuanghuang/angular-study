import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const passwordConfirmation = control.get('passwordConfirmation');
  if (password && passwordConfirmation && password?.value !== passwordConfirmation?.value) {
    return {
      passwordmatcherror: true
    }
  }
  else {
    return null;
  }
}
