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