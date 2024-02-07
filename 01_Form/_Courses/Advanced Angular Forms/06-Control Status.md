
```html
<form class="form ng-untouched ng-pristine ng-valid">
  <input name="first-name" class="ng-valid ng-dirty ng-touched">

  <fieldset ngmodelgroup="address" ng-reflect-name="address" class="ng-untouched ng-pristine ng-valid">
  </fieldset>
</form>
```

Add css to the input and exclude the form and fieldset

```css
.ng-valid.ng-dirty:not([ngModelGroup]):not(form)
{
  border: 1px solid
  var (--color-success) ;
}
```

## NgControlStatus & NgControlStatusGroup
find the NgControlStatus in devtools

```ts
ng.getDirectives($0)
```
