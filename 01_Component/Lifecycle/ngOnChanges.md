
ngOnChanges life cycle hook triggers before the ngOnInit hook

When we update the value of the vName input in the `parent`, ngOnChanges gets called with the updated value.


```
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';


export class VcLogsComponent implements OnInit, OnChanges
{
  ...
  ngOnChanges(changes: SimpleChanges) {
    const currValue = changes.vName.currentValue;

    if (changes.vName.isFirstChange()) {
      this.logs.push('initial version is ${currValue.trim()}')
    } else {
      this.logs.push('version changed to ${currValue.trim()}')
    }
  }
}
```