## AbstractControl
The base class for all form controls.

## FormControl()

```ts
const fc = new FormControl();
fc. value;
fc. valid
fc.disabled
//...
fc. setValue( 'Another Value');
//...
```

## ValueAccessor
Perform a state synchronization between Native control with FromControl
Different control need different ValueAccessor:
DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, RadioControlValueAccessor, NumberValueAccessor, RangeValueAccessor, DateValueAccessor, TextValueAccessor, SelectMultipleControlValueAccessor, CustomValueAccessor


## FromGroup
A group of FormControl, groups them in to an object
Group can be nested, the root group is representing the final form.


## FromArray
A group of FormControl but groups them in to an array

## FromRecord
Basically the same as FromGroup but supports open-ended groups where FormControl can be added or removed dynamically at runtime.
