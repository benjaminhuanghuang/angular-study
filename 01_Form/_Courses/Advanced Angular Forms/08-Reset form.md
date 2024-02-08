## Strategy 1

Reset from values, validation status, making control untouched, pristine, etc

```ts
from.resetForm();
```

## Strategy 2

Reset control status but keep the value

```ts
ngAfterViewInit ( ): void {
  queueMicrotask ( () => {
    this.initialFormValues = this. formDir.value;
  })
}

onRest (event: Event): void {
  event.preventDefault();
  this.fromDir.resetForm(this.initialFormValues);
}
```

```html
<form #form="ngForm" (reset)="onRest($event, form)" (ngSubmit)="onSubmitForm(form, $event)">
<button type="reset" class="reset-button">Reset</button>
```
