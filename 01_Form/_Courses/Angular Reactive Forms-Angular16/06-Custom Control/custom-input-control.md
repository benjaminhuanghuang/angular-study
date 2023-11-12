

## Create a component
```bash
  ng g c profile-icon-selector
```


## Bind a custom component to a form control

Register the component to a NG_VALUE_ACCESSOR
```ts
const PROFILE_ICON_VALUE_PROVIDER: Provider = {
  provide: NG_VALUE_ACCESSOR,
  // use forwardRef to use a type before it's defined
  useExisting: forwardRef(() => ProfileIconSelectorComponent),
  multi: true
}
```
