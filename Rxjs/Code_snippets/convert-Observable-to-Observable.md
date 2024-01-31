```ts
interval(100)
    .pipe(
        window(interval(1000)),   // close buffer and emit a new observable every 1000 ms
        switchMap(w => w.pipe(toArray()))  // get value from the observable and emit as array
    )
```
