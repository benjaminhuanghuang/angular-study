# Angular Change Detection

Angular implements two strategies that control change detection behavior on the level of individual components: Default and OnPush.

Angular uses these strategies to determine whether a child component should be checked while running change detection for a parent component.

A strategy defined for a component impacts all child directives since they are checked as part of checking the host component. A defined strategy cannot be overridden in runtime. Making a component OnPush affects the way `change detection` works for the component and all children of the view.
If you need to use a child component that does not support OnPush you may not be able to use OnPush in your component.
```ts
@Component({
  selector: 'a-op',
  template: `I am OnPush component`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AOpComponent {}
```

The default strategy(CheckAlways), implies regular automatic change detection for a component unless the view is explicitly detached.
The OnPush strategy(CheckOnce), implies that change detection is skipped unless a component is marked as dirty. Angular implements mechanisms to automatically mark a component as dirty. When needed, a component can be marked dirty manually using markForCheck() method exposed on ChangeDetectorRef.



## What is Change Detection?

Data changing driving the UI updates.

## How does it work?

Angular think some operations will cause state changes.

- DOM event: click, input
- Network event: XHR, fetch
- Timer: setTimeout, setInterval

Angular use Zone.js to monkey patch the APIs and trigger change detection when: a sync or async function is executed & there is no more microtasks scheduled.
Call view.detectChanges() to trigger change detection.

```ts
// https://www.bilibili.com/video/BV1bG411d7oP
ngAfterViewInit(): void {
  this.ngZone.runOutsideAngular (() => {
    (this.updateBtn.nativeElement as HTMLButtonElement).onclick = () => {
    this. title = 'Demo - New';
    this. cdr.markForCheck(); 1
    this.appRef.tick();
    } ;
  }) ;
}
```

## Change Detection with Performance

- Less frequent change detection
  - Avoid Zone pollution (caused by 3th party library)
    ```ts
    const option: EChartsOption = {...};

    export class AppComponent implements AfterViewInit {
      @ViewChild('chart') chart!: ElementRef;

      private ngZone = inject(NgZone) ;
      
      ngAfterViewInit(): void {
        this.ngZone.runOutsideAngular(() => {
        initECharts(this.chart.nativeElement).setOption(option);
      }) ;
      }
    ```
  - Avoid listening to high frequent events (scroll, mouseover)

- Reduce the time of change detection

## OnPush strategy
