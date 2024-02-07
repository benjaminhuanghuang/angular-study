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
