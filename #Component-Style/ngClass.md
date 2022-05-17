

The value indicate whether the class should be applied or not
```
<div [ngClass]="{bordered: false}">This is never bordered</div>

<div [ngClass]="{bordered: true}">This is always bordered</div>

```



```
  <p [ngClass]="{online:serverStatus==='online'}">Test</p>
```


```
<div class="base" [ngClass]="['blue', 'round']">
  This will always have a blue background and round corners
</div>
```