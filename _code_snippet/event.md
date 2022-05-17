JavaScript, by default, propagates the click event to all the parent components.
Because the click event is propagated to parents, our browser is trying to follow the
empty link, which tells the browser to reload.

To fix that, we need to make the click event handler to return false.

## Raise event 
.ts file
```
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  public onFeatureSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
```
.html file
```
 <li><a href="#" (click)="onFeatureSelect('recipes', $event)">Recipes</a></li>
```
## handler
```
<app-header (featureSelected)="onNavigate($event)"></app-header>
```


```
export class AppComponent {
  @Input() featureSelected: string;

  public onNavigate(featureSelected: string) {
    this.featureSelected = featureSelected;
  }
}

```