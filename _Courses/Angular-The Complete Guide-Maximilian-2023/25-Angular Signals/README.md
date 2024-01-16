Signal gives a new way of handling data changes and of updating the UI


## Classic Angular Change Detection vs Signals
Zone.js is a library that is used by Angular to detect changes in the application and update the UI accordingly.
Changes are detected automatically, UI is updated automatically with the classic change detection.

Single allow angular to stop watching the entire application and lead to `better performance and smaller bundle`
No automatic change detection, you tell Angular when data changes. Angular updates only the parts of the UI where the signal is used


## Creating a Signal
```ts
  actions = signal<string[]>([]);

  counter = signal(0);

  doubleCounter = computed(() => this.counter() * 2);
```

## Update a Signal
set
```ts
 this.counter.set(newValue);
```

update
There is an equality check if the new value is the same as the old value, the signal will not be updated
```ts
  this.counter.update((oldCounter) => oldCounter + 1);
```

mutate
Always run the change detection
```ts
  this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
```

## Show the value of Signal in the template
```html
{{ counter() }}
```
