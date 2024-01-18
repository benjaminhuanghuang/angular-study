# Improve Performance with OnPush Change Detection
Most applications won't need OnPush change detection,

## Angular's default change detection
Angular be aware of every binding in the template and watch for changes in.

Angular monkey patches all low-level browser events, in addition to some functions like setTimeout.
Whenever Angular detects one of these events, it checks every one of these bindings to see if they've changed

You may have to do an expensive calculation to generate the value for one of these bindings. In that case, you would really only want to reevaluate your bindings when it's really necessary
This is where OnPush change detection comes in

```ts
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
}
```
With OnPush change detection, Angular will only do comparison for the object or array references, not for every one of the properties in the objects or every one of the items in the arrays. 
In addition, instead of change detection firing for every browser event, OnPush detectors only fire when input references change or when an async observable fires an event and in a few other cases. 

if you have a component that is having performance issues and you determine that change detection is causing expensive expressions to be reevaluated too frequently, you may want to look into OnPush change detection

Angular will look at reference changes, not property changes. So, when you want to actually change something in the view, you need to be sure Angular notices it by changing the object or array references, not just by mutating its properties, 
