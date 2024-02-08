## CSS

```css
.ng-invalid.ng-dirty:not ( [ngModelGroup] ):not(form) {
  border: 1px solid var (--color-error);
}


button[disabled] {
  background-color: rgba(0, 0, 0, 0.15);
  border-color: rgba (0, 0, 0, 0.1);
  pointer-events:none;
}
```

```html
  <form #form="ngForm" (ngSubmit)="onSubmit(form, $event)">
    <input [(ngModel)]="userInfo.firstName" 
    required 
    minlength="2" 
    pattern="^[\w.]+$">
    <button [disable]="form.invalid">
  </form>
```
Assign the NgForm directive to the template variable #form

## SHARED_FORM_DIRECTIVES & MinLengthValidator

```ts
@Directive({
  selector: '(minength] [formControlName), [minlength] [formControl], (minlength]|ingModel]',
  providers: [MIN_LENGTH_VALIDATOR],
  host: {'[attr.minlength]': '_enabled ? minlength : null'}
})
export class MinLengthValidator extends AbstractValidatorDirective {
}
```

## Native browser validation

require, minlength, pattern, etc. are all native browser validation attributes. 

```html
<form ngNativeValidate >
    <input [(ngModel)]="userInfo.firstName" 
    required 
    minlength="2">

</form>  
```

```css
form:invalid button {
  background-color:
  rgba (0, 0, 0, 0.15) ;
  border-color: Orgba(0, 0, 0, 0.1);
  pointer-events: none;
}
```

## Validate message
```html

<div *ngIf="nickname.dirty && nickname.hasError('required')" class="input-error">This field is required</div>
<div *ngIf="nickname.dirty && nickname.hasError ('minlength')" class="input-error">This field is</div>
<div *ngIf="nickname.dirty && nickname. hasError('pattern')" class="input-error">Only letters</div>
```

## Deep dive into validation
Phase 1 - Collecting, transforming and composing of provided validators

Phase 2 - Register prepared validators in NgModel's FormControl instance

Phase 3 - Running validators every time the value of FormControl changes

## Custom validation

```ts
@Directive{(
  selector: '[appBanWords]',
  provide: NG_VALIDATORS,
  useExisting: BanWordsDirective,
  multi: true
)}
export class BanWordsDirective implements Validator {

@Input()
appBanWords ( value: string | string[]) {
  this. bannedWords = Array, isArray(value) ? value : [value];
}
private bannedWords: string [] = [];

validate(control: AbstractControl<string>) : ValidationErrors
{
  return control.value !== this.appBanWords ? null : {bannedWord: this.appBanWords};
}
```

## Cross Filed Validation
Apply the directive to fromGroup

```ts
@Directivel({
  selector: '[appPasswordShouldMatch]',
  standalone: true, 
  providers: [
    {
      provide: NG_VALIDATORS, 
      useExisting: PasswordShouldMatchDirective, 
      multi: true
    }
  ]
})
export class PasswordShouldMatchDirective implements Validator {
  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get ('confirm-password');
    const error = {appPasswordShouldMatch: {mismatch: true}};
    if(password?. value=== confirmPassword?.value) ‹
      return null;
    }
    confirmPassword?.setErrors(error);
    return error;
  }
}
```

```html
<fieldset ngModelGroup="password" appPasswordShouldMatch>
  <input #confirmPassword="ngMOdel">
  <div *ngIf="confirmPassword.dirty&& confirmPassword.hasError( 'appPasswordShouldMatch')" class="input-error">Password does not match</div>
<fieldset>  
```

## Dynamic enable/disable validation

```html
<input [required]="isAdult">

<input [appBanWords]="isAdult ? ['dummy'] : []">
```

```ts
@Input()
set appBanWords(value: string | string[]) {
  this.bannedWords = Array.isArray(value) ? value : [value];
  this.onChange();
}

private onChange: () => void = () => {};

registerOnValidatorChange(fn: () => void): void {
  this.onChange = fn;
}
```

## Async validation

```bash
  ng g d playground/template-forms/validation/unique-nickname --standalone --project forms-playground  
```

```ts
import { Directive } from '@angular/core';
import { AsyncValidator, NG_ASYNC_VALIDATORS } from '@angular/forms';
@Directive({
  selector: ' [appUniqueNickname]',
  standalone: true,
  providers:[
  {
  provide: NG_ASYNC_VALIDATORS,
  multi: true,
  useExisting: UniqueNicknameDirective
  }
]
})
export class UniqueNicknameDirective implements AsyncValidator {
  constructor(private http: HttpCLient, private cd: ChangeDetectorRef) { }

  validate(control: AbstractControl<string>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.http.get<any[]>("http://  users?username=${control.value}").pipe(
      map(users => {
        return user.length === 0 ? null : {uniqueNickname: true};
      }),
      catchError(() => of({uniqueNickname: true})),
      finalize(() => this.cd.markForCheck())  // for onPush change detection
    );
  }
}
```

```html
<input [ngModelOptions]="{updateOn:'blue'}">

<div *ngIf="nickname-pending" class="input-info">Checking...</div>


<button [disabled]="form.invalid || form-pending">Save</button>
```
