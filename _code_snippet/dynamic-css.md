
## Add css based on condition
```
  [class.noBorder] = "inVisualCalcMode"
```

## Use different css based on condition
```
  [ngClass]="{'noBorder': inVisualCalcMode, 'border': !inVisualCalcMode}"
```

One simple use of ngClass is to assign multiple static class names all at once. To do that, we pass in an array of class names:
``````
<div [ngClass]="['class1', 'class2']"></div>
``````
Finally, we can use ngClass to assign multiple CSS attributes based on different conditions:
```
<div [ngClass]="{
   'class1': condition,
   'class2': !condition
}">
```
