import { Directive, ElementRef, HostListener, Provider, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class DateValueAccessorDirective implements ControlValueAccessor {

  constructor(private element: ElementRef) { }

  @HostListener('input', ['$event.target.valueAsDate'])
  private onChange!: Function;

  @HostListener('blur')
  private onTouched!: Function;


  registerOnChange(fn: Function): void {
    this.onChange = (valueAsDate: Date) => {
      fn(valueAsDate);
    }
  }

  registerOnTouched(fn: Function): void {
    this.onTouched == fn;
  }

  /*
     which is called when a new value is passed to the form control
  */
  writeValue(newValue: Date): void {
    if (newValue instanceof Date) {
      // yyyy-mm-dd
      this.element.nativeElement.value = newValue.toISOString().split('T')[0];
    }
  }
}
