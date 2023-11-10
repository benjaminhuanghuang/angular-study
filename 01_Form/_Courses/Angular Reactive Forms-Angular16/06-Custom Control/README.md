## Overview
- Creating a custom DateValueAccessor
- ControlValueAccessor: writeValue()
- ControlValueAccessor: input events
- Creating custom input control
- Binding custom controls to a FormControl


## The ControlValueAccessor Directive
Sync data between the form model and the DOM element

```
  ng g d date-value-accessor/date-value-accessor
```


```ts
import { Directive } from '@angular/core';
@Directive ({
  selector: 'input ([type=date])[formControlName], input ([type=date]) [formControl], input ([type=date]) [ngModel]'
})
export class DateValueAccessorDirective {
  constructor () {

  }
}
```
