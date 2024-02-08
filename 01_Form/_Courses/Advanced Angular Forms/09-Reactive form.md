
## import ReactiveFormsModule
Apply some directives to the form automatically


```html
<form [formGroup] ="form">

  <input formControlName="firstName">
</form>
```


```ts
  form = new FormGroup({
    firstName: new FormControl('default value', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('default value', [Validators.required, Validators.minLength(2)]),
  });

```
