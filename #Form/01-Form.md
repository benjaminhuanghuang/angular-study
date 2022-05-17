## template driven Form
Use the form
```
<app-demo-form-sku> </app-demo-form-sku>

```

demo-form-sku.component.ts
```
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html'
})
export class DemoFormSkuComponent implements OnInit {

 constructor() { }

 ngOnInit() {
 }

 onSubmit(form: any): void {
  console.log('you submitted value:', form);
 }
}

```

demo-form-sku.component.html 
use ngForm, ngModel

if you import FormsModule, NgForm will get automatically attached to any <form>
tags you have in your view. This is really useful but potentially confusing because it
happens behind the scenes.

```
<div class="ui raised segment">
  <form #f="ngForm" (ngSubmit)="onSubmit(f.value)" class="ui form">
  <div class="field">
    <label for="skuInput">SKU</label>
    <input type="text"
      id="skuInput"
      placeholder="SKU"
      name="sku" ngModel>
  </div>

  <button type="submit" class="ui button">Submit</button>
  </form>
 </div>
```

NgForm gives us:
- A FormGroup named ngForm
- A (ngSubmit) output - comes from NgForm

#v="thing"says that we want to create a local variable for this view
Here we’re creating an alias to ngForm, for this view, bound to the variable #f

The NgModel directive specifies a selector of ngModel. This means we can attach it
to our input tag by adding this sort of attribute: ngModel="whatever". In this case,
we specify ngModel with no attribute value.

NgModel creates a new FormControl that is automatically added to the parent
FormGroup (in this case, on the form) and then binds a DOM element to that new
FormControl.