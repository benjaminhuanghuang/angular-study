https://angular.io/api/core/global

$0 is a global variable the Chrome DevTools make available, whose value is the most recently selected element. You can use this for $1, $2, $3 & $4 to inspect the previous four DOM elements.

Retrieves the component instance associated with a specific DOM element.
```
ng.getComponent($0)
````

This function marks a component for check and performs synchronous change detection on the application to which the component belongs.
```
const component = $0;
ng.applyChanges(component);
```

retrieves the instance of the component whose view owns the element.
```ts
const context = ng.getContext($0);
console.log(context);
```


```
const metadata = ng.getDirectiveMetadata($0);
console.log(metadata);
```
