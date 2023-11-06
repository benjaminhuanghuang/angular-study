
## Build form model in the component class
src\app\edit-contact
```ts
  firstName = new FormControl();
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
