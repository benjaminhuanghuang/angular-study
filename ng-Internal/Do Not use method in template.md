Calling function in Angular templates may cause `serious performance issues`.

The function Angular template is executed every time Angular change detection runs(E.g. mouse is moved over the div). And that can be many times!

Furthermore, change detection can be triggered outside of the component.


## Case 1 
Why you should never use function calls in Angular template expressions
https://medium.com/showpad-engineering/why-you-should-never-use-function-calls-in-angular-template-expressions-e1a50f9c0496

```ts
@Component({
  template: `
    <p>Welcome {{ fullName() }}!</p>
    <div (mousemove)="onMouseMove()">Drop a picture here</div>
`
})
export class PersonComponent {
  @Input() person: { firstName: string, lastName: string };

  constructor() { }
  
  fullName() {
    return this.person.firstName + ' ' + this.person.lastName
  }

  onClick() {
    console.log('Button was clicked');
  }
}
```

Furthermore, change detection can be triggered outside of the PersonComponent:
```ts
<person [person]="person"></person>

<button (click)="onClick()">
  Trigger change detection outside of PersonComponent
</button>
```
Here, the fullName() function inside PersonComponent is executed every time the button outside of PersonComponent is clicked.

## Why are functions in expressions called so many times?
The goal of Angular change detection is to figure out which parts of the UI need to be re-rendered when changes occur.

To determine whether <p>Welcome {{ fullName() }}!</p> needs to be re-rendered, Angular needs to execute the fullName() expression to check if its return value has changed.

Because Angular cannot predict whether the return value of fullName() has changed, it needs to execute the function every time change detection runs.

So if change detection runs 300 times, the function is called 300 times, even if its return value never changes.

## What about ChangeDetectionStrategy.OnPush?
When we enable ChangeDetectionStrategy.OnPush for the PersonComponent, we tell Angular change detection to ignore changes outside PersonComponent that do not affect its input properties.

## The solution: how to avoid unnecessary function calls
Strategy 1— Pure pipes

Strategy 2— Manually calculate the values



## Sample 2 
Why You Should Never Use Methods Inside Templates in Angular
https://betterprogramming.pub/why-you-should-never-use-methods-inside-templates-in-angular-497e0e11f948

```html
<textarea value="{{getAddress()}}">
```

The getAddress() method has been triggered `four times` after the page refreshed. 
And every time I click on the page, hover the mouse over the text area, or click on it, I get more and more consoles.

This happens because of `Angular change detection`.


## Fix
```html
<textarea value="{{getAddress()}}">
```
Call the method in the `ngOnInit` hook and assign the result to a variable.
```ts
ngOnInit() {
  this.address = this.getAddress();
}
```
