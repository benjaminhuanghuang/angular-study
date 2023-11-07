
## Build form model in the component class
src\app\edit-contact
```ts
  firstName = new FormControl('Jim');   
  lastName = new FormControl() ;
  dateOfBirth = new FormControl();
  favoritesRanking = new FormControl();
```
Bind the form controls to the template
Angular will start tracking all of its state
```html
  <input [formControl]="firstName" placeholder="First Name" />
```

access the value of the form control
```ts
  save() {
    console.log(this.firstName.value);
  }
```

Set value to form
```ts
this.contactsService.getContact(contactId).subscribe(contact => {
    if (!contact) return;
    this.firstName.setValue(contact.firstName);
    this.lastName.setValue(contact.lastName);
    this.dateOfBirth.setValue(contact.dateOfBirth);
    this.favoritesRanking.setValue(contact.favoritesRanking);
});
```
