
To the html form, when we click the Save/Submit button, the page will be reloaed.

## FormsModule and the directives

FormsModule is needed to template-driven form

Import FormsModule will add some directives to the form automatically, which changes the form behavior.

In Angular DevTools:
```
  ng.getDirectives(document.getElementsByTagName('form')[0])

  ng.getDirectives($0)    # use select picker to select the form
```
We can see [0NgNoValidate, NgControlStatusGroup, NgForm] are added to the form.

The source code of NgForm

```ts
@Directive({
  selector: 'form:not([ngNoForm]):not([formGroup]), ng-form, [ngForm]',
  providers: [formDirectiveProvider],
  host: {'(submit)': 'onSubmit ($event)', '(reset)': 'onReset() '},
  outputs: ['ngSubmit'],
  exportAs: 'ngForm'
})
export class NgForm extends ControlContainer implements Form, AfterViewInit {
}
```
the html form tag is valid to "form:not([ngNoForm]):not([formGroup]) selector

<form ngNoForm> will be ignored by NgForm
