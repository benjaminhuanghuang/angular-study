## styleUrls
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
    "src/style.css"
  ]
```

## selector
```
:host{
  
}

// class for the element host this component
:host(.active) {

}

:host-context(.theme-light) h2 {

}
```