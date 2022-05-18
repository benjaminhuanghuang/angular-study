

```
let control = new FormControl('sku', Validators.required);
```

Validation
```
<div *ngIf="sku.hasError('required')" class="ui error message">SKU is required</div>
```



## Watching For Changes
Both FormGroup and FormControl have an EventEmitter that we can use to observe changes.
```
constructor(fb: FormBuilder) {
 this.myForm = fb.group({
 'sku': ['', Validators.required]
});

 this.sku = this.myForm.controls['sku'];

 this.sku.valueChanges.subscribe( (value: string) => {
  console.log('sku changed to:', value);
  }
 );

 this.myForm.valueChanges.subscribe(
 (form: any) => {
 console.log('form changed to:', form);
 }
 );

 }

```
