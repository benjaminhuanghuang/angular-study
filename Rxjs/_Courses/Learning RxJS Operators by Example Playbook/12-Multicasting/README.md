- multicast
Will be removed in v8. Use the connectable observable, the `connect` operator or the `share` operator instead

- share
1. keeps the original subscription open as long as there is at least one subscriber. As soon as the last subscriber unsubscribes, share unsubscribes from the source Observable.
2. Share make the source Observable hot.

```ts
const source2$ = interval(1000).pipe(
    share()
);
```


- shareReplay
Hot observable, Keeps Observable open, Last N values

- publish

- publishBehavior

- publishLast

- publishReplay
