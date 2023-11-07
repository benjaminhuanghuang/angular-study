Use submit button to submit form
```html
<form [formGroup]="contactForm" (ngSubmit)="saveContact()">
    <button type="submit" class="primary">Save</button>
</form>
```


```ts
saveContact() {
    this.contactsService.saveContact(this.contactForm.getRawValue()).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
}
```
getRawValue() returns all FormControl property values even if the control is disabled.


```ts
 saveContact(contact: Partial<Contact>): Observable<Contact> {
 
 }
```
Use Partial as the type for the parameter to indicate that not all properties are required.
