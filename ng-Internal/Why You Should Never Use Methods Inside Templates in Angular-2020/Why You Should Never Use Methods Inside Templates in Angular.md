# Why You Should Never Use Methods Inside Templates in Angular
https://betterprogramming.pub/why-you-should-never-use-methods-inside-templates-in-angular-497e0e11f948

```html
<textarea value="{{getAddress()}}">
```

The getAddress() method has been triggered `four times` after the page refreshed. 
And every time I click on the page, hover the mouse over the text area, or click on it, I get more and more consoles.


## Fix
```html
<textarea value="{{getAddress()}}">
```

```ts
ngOnInit() {
  this.address = this.getAddress();
}
```
