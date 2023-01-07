## Pass service to all components in module

```
  provider: [
    MyService
  ]
```


## import service to component
```
@Component({
    selector: 'my-editor',
    templateUrl: './my-editor.component.html',
    styleUrls: ['./my-editor.component.less'],
    providers: [MyService]
})
```