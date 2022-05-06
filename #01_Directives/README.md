# Directives
Directives are instructions in the DOM. 
Change the appearance or behavior of DOM elements and Angular components with attribute directives.

```
<p appTurnGreen> change background </p>
```

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
