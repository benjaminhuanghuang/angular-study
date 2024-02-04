# Aync Pipes

The most popular ways to consume the observable stream of state updates by the components:
Using the subscribe() method and storing the state on the component instance

```ts
  todos$.subscribe(todos => this.todos = todos)
```

The | async pipe unwraps the state object directly in the component’s template

```html
 <li *ngFor="let todo of todos$ | async"></li>
```


The async pipe will automatically call change-detection for you when the underlying observable emits.
This "reactive programming" paradigm allows OnPush to be used easily, without the confusion and mistakes around manually calling change detection, and it doesn’t require everything you want to display to have been on an input binding
