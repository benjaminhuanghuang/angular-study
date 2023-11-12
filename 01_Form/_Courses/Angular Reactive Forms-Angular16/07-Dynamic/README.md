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
 <div *ngFor="let phone of contactForm.controls.phones.controls; let i=index" [formGroupName]="i" class="flex-column">
  <div class="flex-group">
    <input formControlName="phoneNumber" placeholder="Phone" />
    <img src="/assets/plus-grey-blue.png" class="add" (click) = "addPhone()" />
  </div>
  <div class="radio">
    <span *ngFor="let phoneType of phoneTypes">
      <input type="radio" formControlName="phoneType" [value]="phoneType.value"> {{phoneType.title}}
    </span>
  </div>
</div>
```
