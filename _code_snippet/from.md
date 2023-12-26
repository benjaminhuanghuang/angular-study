
```
<form class="ui large form segment">
  <div class="field">
    <label for="title">Title:</label>
    <input name="title" id="title" #newtitle> 
  </div>
  <div class="field">
    <label for="link">Link:</label>
    <input name="link" id="link" #newlink> 
  </div>
  <button (click)="addArticle(newtitle, newlink)">
    Submit
  </button>
 </button>
```
The `#newtitle` syntax is called a resolve. The effect is that this makes the variable
`newtitle` available to the expressions within this view.

```
addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
  
}
```


## get input
```html
  <input (input)="onChange($event.target.value)">
```
