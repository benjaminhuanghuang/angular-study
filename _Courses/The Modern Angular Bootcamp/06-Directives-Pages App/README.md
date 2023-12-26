# Directives
- Can be used to modify the structure or properties of HTML elements
- Used only in a template
- Some built into Angular (angular.io/api?type=directive)
- We can build them on our own too!


## Dynamic Styling
```html
  [ngClass]="{ disabled: currentPage === images.length - 1 }"

  [ngClass]="{ active: i === currentPage }"
```

## Custom Directive
```bash
  ng g directive class
```

```ts
@Directive({
selector: '[appClass]'
})
export class ClassDirective {
  constructor(private element: ElementRef) {}
  
  @Input () set backgroundColor (color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
```

```html
  <div appClass [backgroundColor]="'red'"></div>
```
