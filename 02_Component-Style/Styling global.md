## styleUrls (can be local)
```
  @Component({
    styleUrls: ['./child.component.css'],
    encapsulation: ViewEncapsulation.None // make the css global
  })
```

child.component.css
```
@import '../../assets/external-style.css'
```

## angular.json
```
  "styles" :[
    "src/style.css",
    "./node_modules/bootstrap/dist/css/bootstrap.min.css"
  ]
```
