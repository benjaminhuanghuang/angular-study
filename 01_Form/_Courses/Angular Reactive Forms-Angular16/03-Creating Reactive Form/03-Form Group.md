```ts
 contactForm = new FormGroup(
    {
      firstName: new FormControl(),
      lastName: new FormControl(),
      dateOfBirth: new FormControl(),
      favoritesRanking: new FormControl()
    }
  );

```


In the template, use formGroup directive to bind the formGroup to the form
```html
<form [formGroup]="contactForm">
  <input formControlName="firstName" placeholder="First Name" />

```

Set value to form
```ts
  this.contactForm.controls.firstName.setValue(contact.firstName);
```

Read value from form
```ts
  this.contactForm.controls.firstName.value

  this.contactForm.controls.value
```
