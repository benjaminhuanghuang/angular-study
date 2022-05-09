## property

```
import { Component, Input } from '@angular/core';

@Component({
  ...
})
export class AppComponent {
  @Input() featureSelected: string;

  public onNavigate(featureSelected: string) {
    this.featureSelected = featureSelected;
  }
}
```