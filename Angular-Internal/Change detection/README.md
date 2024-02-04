# Angular Change Detection

## What is Change Detection?

Data changing driving the UI updates.

## How does it work?

Angular think some operations will cause state changes.

- DOM event: click, input
- Network event: XHR, fetch
- Timer: setTimeout, setInterval

Angular use Zone.js to monkey patch the APIs and trigger change detection when: a sync or async function is executed & there is no more microtasks scheduled.
Call view.detectChanges() to trigger change detection.







Making a component OnPush affects the way `change detection` works for the component and all children of the view. 
If you need to use a child component that does not support OnPush you may not be able to use OnPush in your component.
