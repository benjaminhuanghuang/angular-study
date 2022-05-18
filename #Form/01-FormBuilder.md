
```
import { Component, OnInit } from '@angular/core';
 import {
 FormBuilder,
 FormGroup
}

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styles: []
  })
  export class DemoFormSkuWithBuilderComponent implements OnInit {
    myForm: FormGroup;

    constructor(fb: FormBuilder) {
      this.myForm = fb.group({
      'sku': ['ABC123']
      });
    }

    ngOnInit() {
    }

    onSubmit(value: string): void {
      console.log('you submitted value: ', value);
    }

 }
```

We inject FormBuilder by creating an argument in the constructor of our component class:


Using myForm in the view
```
<div class="ui raised segment">
<h2 class="ui header">Demo Form: Sku with Builder</h2>
<form [formGroup]="myForm" (ngSubmit)="onSubmit(myForm.value)" class="ui form">
  <div class="field">
    <label for="skuInput">SKU</label>
    <input type="text" id="skuInput" placeholder="SKU" [formControl]="myForm.controls['sku']">
  </div>

  <button type="submit" class="ui button">Submit</button>
 </form>
 </div>
```


