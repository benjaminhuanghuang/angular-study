
With background-color, however, the dash character isn’t allowed in an object key, unless it’s a string so we have to quote it.
```
<div [ngStyle]="{color: 'white', 'background-color': 'blue'}">
  Uses fixed white text on blue background
</div>
```

```
  <p [ngStyle]="{backgroundColor: getColor()}">Test</p>
```


````
<span [ngStyle]="{color: 'red'}" [style.font-size.px]="fontSize">
  red text
</span>
```