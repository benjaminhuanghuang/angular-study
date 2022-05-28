```
import { DebugElement } from '@angular/core';
```
You can use DebugElement to inspect an element during testing. You can think of it as the native HTMLElement with additional methods and properties that can be useful for debugging
elements.

```
import { ComponentFixture, fakeAsync, TestBed, tick } from
'@angular/core/testing';



```
- ComponentFixture—You can use it to create a fixture that you then can use for debugging.
- TestBed—You use this class to set up and configure your tests. Because you use
TestBed anytime you want to write a unit test for components, directives, and
services



- fakeAsync— Using fakeAsync ensure that all asynchronous tasks are completed
before executing the assertions

```
import { By } from '@angular/platform-browser';

By.css('.highlight-row')

By.all()

By.directive('directive-name')
```
By is used to select DOM elements.

```
import { NoopAnimationsModule } from '@angular/platform-browser/
animations';
```
You use the NoopAnimationsModule class to mock animations,
which allows tests to run quickly without waiting for the animations to finish.

```
 import { BrowserDynamicTestingModule } from '@angular/platform-browser-
dynamic/testing';
```
BrowserDynamicTestingModule is a module that helps bootstrap the browser to be used for testing.



```
 import { RouterTestingModule } from '@angular/router/testing';
```
set up routing for testing.
We include it with the tests for this component because some of the actions
will involve changing routes.

## Setting up the tests
```
describe('ContactEditComponent tests', () => {
  let fixture: ComponentFixture<ContactEditComponent>;
  let component: ContactEditComponent;
  let rootElement: DebugElement;
});

```
- fixture: Stores an instance of the ComponentFixture, which contains methods
that help you debug and test a component
- component: Stores an instance of the ContactEditComponent
- rootElement: Stores the DebugElement for your component, which is how you’ll
access its children


## shallow tests
Shallow tests let you test components `one level deep`, ignoring any child elements
that the element may contain; you can test the parent component in isolation.



