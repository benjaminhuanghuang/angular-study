https://dev.azure.com/powerbi/PowerBIClients/_git/PowerBIClients/pullrequest/430262

```
fromEvent(this.visualContainerDiv.nativeElement, 'dblclick', { capture: true }).pipe(
    takeUntil(this.onDestroy$),
).subscribe((e: PointerEvent) => {
    this.onDoubleClick(e);
});
```


Change to 
```
this.visibility.get$().pipe(
    takeUntil(this.onDestroy$),
    map(visualContainer => visualContainer?.visibility),
    switchMap((visibility: VisualVisibility | undefined) => {
        switch (visibility) {
            case VisualVisibility.VisualCalcEditing:
                return fromEvent(this.visualComponent.nativeElement, 'dblclick', { capture: true });
            default:
                return fromEvent(this.visualContainerDiv.nativeElement, 'dblclick', { capture: true });  
        }
    }) 
).subscribe((e: PointerEvent) => {
    this.onDoubleClick(e);
});

```
