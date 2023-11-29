## Event Binding  
```html
<button (click)="onButtonClick()"></button>
```
(click): Name of the event
"onButtonClick()" What to do when the event occurs, Evaluated as code


## Property Binding
```html
<input [value]="pwd">
```
[value] is the name of the property we want to set on the input element
"pwd" is a property of the component class and evaluated as code. Whe the pwd property changes, the value of the input element will be updated.


## Handle user input
```html
<input (input)="onChangeLength($event.target.value)">
```

```ts
onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
        this.length = parsedValue;
    }
}
```

## Structural Directives
Add or remove elements from the DOM
```html

<div *ngIf="value">
```

## Attribute Directives
Changes the properties of the DOM elements
```html
<input [disabled]="value">

<label appStrikeThrough> {{ todo.text }} </label
```


## Use bulma css framework
Install bulma
```bash
npm i bulma
```

Import bulma in styles.css
```css
@import "bulma/css/bulma.css";
```


## Deploy
now.sh
```
npm i -g now

now login

now
```
