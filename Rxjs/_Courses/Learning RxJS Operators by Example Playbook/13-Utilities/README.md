- count: Emit number of the values emitted by source Observable on completion.
```ts
    .pipe(
        count(x => x > 0)
    )
```
- every: Emit boolean indicating whether every value emitted by source passes predicate test.
```ts
    .pipe(
        every(x => x > 0)
    )
```

- isEmpty: Emit boolean indicating whether source emits no values.
```ts
    of().pipe(
        isEmpty()
    )
```

- sequenceEqual: Emit boolean indicating whether two observables emit the same sequence of items.
```ts
    of(1, 2).pipe(
        sequenceEqual(of(1, 2, 3))
    )
```

- tap: Emit identical source Observable as output.
```ts
    .pipe(
        tap(x => console.log(x))
    )
```
