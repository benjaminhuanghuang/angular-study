## Fake the service
Angular’s dependency injectio system makes it easy to instantiate a component with a fake version of service.

The fake Service has the same type as the real one

Setup 1
```
beforeEach(() => {

  TestBed.configureTestingModule({
    declarations: [ContactEditComponent, 
                   FavoriteIconDirective, 
                   InvalidEmailModalComponent, 
                   InvalidPhoneNumberModalComponent],
    imports: [
      AppMaterialModule,
      FormsModule,
      NoopAnimationsModule,
      RouterTestingModule
    ],

    // provide fake service contactServiceStub in the format of a `TestModuleMetadata`
    providers: [{provide: ContactService, useValue: contactServiceStub}]
  });
  
  // use overrideModule because a couple of components will be lazily loaded.
  TestBed.overrideModule(BrowserDynamicTestingModule, {
    set: {
      entryComponents: [InvalidEmailModalComponent, InvalidPhoneNumberModalComponent]
    }
  });
});

```

Setup 2
```
beforeEach(() => {
  fixture = TestBed.createComponent(ContactEditComponent);
  component = fixture.componentInstance;

  // triggers a change-detection cycle for the component after making changes, render updates to DOM
  fixture.detectChanges();
  rootElement = fixture.debugElement;
});
```

## Test Async method

- fakeAsync() 
we can ensure that all asynchronous calls are completed within a test before the assertions are executed


Test Save
```
describe('saveContact() test', () => {
  it('should display contact name after contact set', fakeAsync(() => {
    const contact = {
      id: 1,
      name: 'lorace'
    };
    // hide the progress bar
    component.isLoading = false;
    component.saveContact(contact);
    // update
    fixture.detectChanges();
    const nameInput = rootElement.query(By.css('.contact-name'));
    // Simulates the passage of time
    tick();
    expect(nameInput.nativeElement.value).toBe('lorace');
  }));
});
```

Test Load
```
describe('loadContact() test', () => {
  it('should load contact', fakeAsync(() => {
    component.isLoading = false;
    component.loadContact();
    fixture.detectChanges();
    const nameInput = rootElement.query(By.css('.contact-name'));
    tick();
    expect(nameInput.nativeElement.value).toBe('janet');
  }));
});
```

Test update
````
it('should not update the contact if email is invalid', fakeAsync(() => {
  const newContact = {
    id: 1,
    name: 'london',
    email: 'london@example',
    number: '1234567890'
  };
  component.contact = {
    id: 2,
    name: 'chauncey',
    email: 'chauncey@example.com',
    number: '1234567890'
  };
  component.isLoading = false;
  fixture.detectChanges();
  const nameInput = rootElement.query(By.css('.contact-name'));
  tick();
  expect(nameInput.nativeElement.value).toBe('chauncey');
  // shouldn’t be updated using the newContact object
  component.updateContact(newContact);
  fixture.detectChanges();
  tick(100);
  expect(nameInput.nativeElement.value).toBe('chauncey');
}));
