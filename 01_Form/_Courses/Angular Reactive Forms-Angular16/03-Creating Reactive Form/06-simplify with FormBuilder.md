
Inject FormBuilder into the constructor of the component class.
```ts
contactForm = this.fb.group({
    id: '',
    firstName: '',
    lastName: '',
    dateOfBirth: null,
    favoritesRanking: null,
    phone: this.fb.group({
      phoneNumber: '',
      phoneType: '',
    }),
    address: this.fb.group({
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: '',
    })
  });
```


Set value
```ts
this.contactForm.setValue(contact);
```
