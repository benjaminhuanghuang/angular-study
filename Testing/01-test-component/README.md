## shallow tests

Shallow tests let you test components `one level deep`, ignoring any child elements
that the element may contain; you can test the parent component in isolation.

## imports the dependencies

- Testing dependencies that come from Angular
- Dependencies that are included with Angular
- Dependencies that you created for this project

```
import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';


import { FormsModule } from '@angular/forms';
```

- {DebugElement} You can use DebugElement to inspect an element during testing. You can think of it as the native HTMLElement with additional methods and properties that can be useful for debugging elements.

- { TestBed } — Used to set up and configure tests.

- { fakeAsync } — Using fakeAsync ensure that all asynchronous tasks are completed before executing the assertions. When using fakeAsync, you can use `tick` to simulate the passage of time

- { By } - use to select DOM elements

```
  By.css('.highlight-row')
  By.all()
  By.directive('directive-name')
```

- { NoopAnimationsModule } - mock animations, which allows tests to run quickly without waiting for the animations to finish.

- { ComponentFixture } — You can use it to create a fixture that you then can use for debugging.

- { BrowserDynamicTestingModule } - is a module that helps bootstrap the browser to be used for testing.

- { RouterTestingModule } - set up routing for testing.

## Setting up the tests

### Create some variable for testing

```
describe('MyComponent tests', () => {
  let fixture: ComponentFixture<MyComponent>;
  let component: MyComponent;
  let rootElement: DebugElement;
});

```

fixture: Stores an instance of the ComponentFixture, which contains methods that help you debug and test a component

component: Stores an instance of the ContactEditComponent

rootElement: Stores the DebugElement for your component, which is how you’ll

access its children

### create fack service for components testing

A real Service makes HTTP calls, which would make the tests harder to run and less deterministic.

Angular’s dependency injection system makes it easy to instantiate a Component with a fake version of the Service.

```
describe('MyComponent tests', () => {
  const contactServiceStub = {
    contact: {
    id: 1,
    name: 'janet'
  },

  save: async function (contact: Contact) {
    component.contact = contact;
  },

  getContact: async function () {
    component.contact = this.contact;
    return this.contact;
  },

  updateContact: async function (contact: Contact) {
    component.contact = contact;
  }
};

});
```

### provide fake service in the providers in a beforeEach() funciton

```
beforeEach(() => {
  // Take an object in  TestModuleMetadata type
  // provide components, services the testing required
  TestBed.configureTestingModule({
    declarations: [ContactEditComponent, FavoriteIconDirective,
    InvalidEmailModalComponent, InvalidPhoneNumberModalComponent],

    imports: [
      AppMaterialModule,
      FormsModule,
      NoopAnimationsModule,
      RouterTestingModule
    ],

    // Inject fake service
    providers: [{provide: ContactService, useValue: contactServiceStub}]
  });

  TestBed.overrideModule(BrowserDynamicTestingModule, {
    set: {
      entryComponents: [InvalidEmailModalComponent,
      InvalidPhoneNumberModalComponent]
    }
  });
});
```

The fixture variable stores the component-like object from the
TestBed.createComponent() method that you can use for debugging and testing

### Hold the variables for testing

```
beforeEach(() => {
  fixture = TestBed.createComponent(ContactEditComponent);
  component = fixture.componentInstance;

  // trigger the DOM rendering after change properties in component
  fixture.detectChanges();
  rootElement = fixture.debugElement;
});
```

The fixture variable stores the component-like object from the TestBed.createComponent method that you can use for debugging and Testing

## Add tests

通常不需要测试 private function, public function 会调用 private function

- Test save

```
describe('saveContact() test', () => {
  // use the fakeAsync() to keep the test from finishing until the component has finished updating.
  it('should display contact name after contact set', fakeAsync(() => {
    const contact = {
      id: 1,
      name: 'lorace'
    };

    // hide the progress bar
    component.isLoading = false;

    // call the method to be tested
    component.saveContact(contact);
    // trigger DOM rendering
    fixture.detectChanges();

    // query
    const nameInput = rootElement.query(By.css('.contact-name'));

    tick();

    expect(nameInput.nativeElement.value).toBe('lorace');
  }));
});
```

- Test Load

```
describe('loadContact() test', () => {
  it('should load contact', fakeAsync(() => {
    component.isLoading = false;
    component.loadContact();

    // trigger rendering
    fixture.detectChanges();

    const nameInput = rootElement.query(By.css('.contact-name'));
    tick();
    expect(nameInput.nativeElement.value).toBe('janet');
  }));
});
```

- Test update

- Test invalid update
