Starting from Angular v16.1.0, a new helpful feature has been introduced to provide an alternative and easy way to transform input values, eliminating the need for using setter and getter methods.


```ts
function toNumber(value: string | number) {
  return isNumber(value) ? value : parseInt(value);
}

@Component({
  selector: 'app-rect',
  template: ``,
  standalone: true,
})
export class FooComponent {
  @Input({ transform: toNumber }) width: number;
}
```
