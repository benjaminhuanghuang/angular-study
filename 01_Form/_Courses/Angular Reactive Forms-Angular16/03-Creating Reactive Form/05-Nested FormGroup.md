```ts
contactForm = new FormGroup(
    {
      id: new FormControl(),
      firstName: new FormControl(),
      lastName: new FormControl(),
      dateOfBirth: new FormControl(),
      favoritesRanking: new FormControl(),
      phone: new FormGroup({
        phoneNumber: new FormControl(),
        phoneType: new FormControl(),
      }),
      address: new FormGroup({
        streetAddress: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        postalCode: new FormControl(),
        addressType: new FormControl(),
      }),
    });
```

The template is updated to use the new form group structure.
