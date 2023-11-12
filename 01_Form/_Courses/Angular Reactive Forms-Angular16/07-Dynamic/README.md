## Overview
Understanding FormArrays
Adding FormArrays to a form model
Dynamically adding form elements



## FormArray
Array of FormControl or FromGroup
```ts
phones = new FormArray([
  new FormGroup({
    phoneNum: new FormControl),
    phoneType: new FormControl(),
  }),
  new FormGroup({
    phoneNum: new FormControl),
    phoneType: new FormControl(),
  }) ,
]);
phones. push (new FormGroup(...));

// Sample 2
phones = this.fb.array([
  this.fb.group({
    phoneNum: ''
    phoneType: '
  }),
  this.fb.group({
    phoneNum: ''
    phoneType:
  }) ,
});
phones.push(this.fb.group(...));
```


## Bind from array to template
formArrayName
```html
<div formArrayName="phones" class="flex-column">
  <div class="flex-group">
    <input formControlName="phoneNumber" placeholder="Phone" />
    <img src="/assets/plus-grey-blue.png" class="add" />
  </div>
  <div class="radio">
    <input type="radio" formControlName="phoneType" value="mobile"> Mobile
    <input type="radio" formControlName="phoneType" value="work"> Work
    <input type="radio" formControlName="phoneType" value="other"> Other
  </div>
</div>
```
