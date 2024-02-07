
The NgForm directive listens the native submit event and emits the ngSubmit event.

```ts

@Directivel{
  selector: 'form: not ( [ngNoForm]) : not ( [formGroup]), ng-form, [ngForm] ' ,
  providers: [formDirectiveProvider],
  host: {'(submit)': 'onSubmit ($event)', '(reset) ': 'onReset () '},    // listens the native submit event
  outputs: ['ngSubmit'],
  exportAs: 'ngForm'
})
export class NgForm extends ControlContainer implements Form, AfterViewInit {
}


onSubmit ($event: Event): boolean {
  (this as {submitted: boolean}). submitted = true;
  syncPendingControls(this.form, this._directives);
  this.ngSubmit.emit ($event) ;      // emits the ngSubmit event
  return false;
}
```


```html
  <form #form="ngForm" (ngSubmit)="onSubmit(form, $event)">
```

Assign the NgForm directive to the template variable #form, and pass it to the onSubmit method.
