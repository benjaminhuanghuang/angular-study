# Simulating Events in Angular Unit Tests
https://netbasal.com/simulating-events-in-angular-unit-tests-5482618cd6c6


There are two ways to trigger events in unit tests.

## Angular’s triggerEventHandler() Method
The Angular DebugElement instance provides a handy method for triggering events — triggerEventHandler()

```
it('should set 😜 on click', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();

  const h1 = fixture.debugElement.query(By.css('h1')); // use the query() method to obtain a reference to the element 
  h1.triggerEventHandler('click', {});                 // trigger the event
  fixture.detectChanges();

  expect(fixture.debugElement.query(By.css('h1')).nativeElement.innerText).toEqual('😜');
});

```
It will invoke the event handler only if it was declared on the native element by using Angular event bindings, the @HostListener() or @Output decorators (and the less used Renderer.listen())
the second parameter is the actual event object that will pass to the handler.

## Using the Native APIs
```
it('should set the 😜 on click', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();

  const h1 = fixture.debugElement.query(By.css('h1'));
  h1.nativeElement.click();     // Native API

  fixture.detectChanges();
  expect(
    fixture.debugElement.query(By.css('h1')).nativeElement.innerText
  ).toEqual('😜');
});
```
