
## The ControlValueAccessor Directive
ControlValueAccessor sync data between the form model and the DOM element

### Crate a custom ControlValueAccessor
ControlValueAccessor is directive
```
  ng g d date-value-accessor/date-value-accessor
```


Set selector to match the input type
```ts
import { Directive } from '@angular/core';
@Directive ({
  selector: 'input([type=date])[formControlName], input([type=date])[formControl], input([type=date])[ngModel]'
})
export class DateValueAccessorDirective {
  constructor () {

  }
}
```

Register the DateValueAccessorDirective as an ng value provider
```ts
const DATE_VALUE_PROVIDER: Provider = {
  provide: NG_VALUE_ACCESSOR,
  // use forwardRef to use DateValueAccessorDirective before it's defined
  useExisting: forwardRef(() => DateValueAccessorDirective),
  multi: true
}

@Directive({
  selector: 'input([type=date])[formControlName], input([type=date])[formControl], input([type=date])[ngModel]',
  providers: [DATE_VALUE_PROVIDER]
})
export class DateValueAccessorDirective {
  constructor() { }
}
```

It will work with the date input
```html 
  <input formControlName="dateOfBirth" type="date" placeholder="Date of Birth" />
```
