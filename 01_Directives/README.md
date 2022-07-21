# Directives
Directives are instructions in the DOM. 
Change the appearance or behavior of DOM elements and Angular components with attribute directives.

```
<i [appFavoriteIcon]="contact.favorite" [color]="'blue'"></i>
```

```
@Directive({
selector: '[appFavoriteIcon]'
})
```

## 3 types of directives:
### 1 Components
- components contain a view (defined by a template). 
- components are visible in the browser, and directives are not.


### 2 Structural directives
add or remove elements from the DOM—to change the structure of the page. Like
ngIf and ngShow

```
<div *appShowContacts="contacts.length"></div>
```

### 3 Attribute directives
change the appearance of a DOM element
```
```

## Component vs Directive



## Create
```
ng generate directive highlight

ng g d highlight
```

```
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(private el: ElementRef) {
       this.el.nativeElement.style.backgroundColor = 'yellow';
    }
}
```
