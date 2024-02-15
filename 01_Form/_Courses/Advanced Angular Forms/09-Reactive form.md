
## import ReactiveFormsModule

```ts
imports: [    ReactiveFormsModule]
```

Apply some directives to the form automatically

```html
<form [formGroup] ="form"> <!-- "form" is the name of the FormGroup -->

  <input formControlName="firstName">  <!-- value of formControlName should match the key in the FormGroup -->
</form>
```

```ts
  form = new FormGroup({
    firstName: new FormControl('default value', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('default value', [Validators.required, Validators.minLength(2)]),
  });

```
