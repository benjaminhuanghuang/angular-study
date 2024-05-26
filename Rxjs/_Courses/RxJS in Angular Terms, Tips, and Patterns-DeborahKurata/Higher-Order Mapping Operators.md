# Higher-Order Mapping Operators

Tip: To subscribe to a inner observable and flatten the result, use a higher-order mapping operator

- Automatically subscribe to the inner Observable
- Flatten the resulting Observable
- Returning Observable<T> not Observable<Observable<T>>
- Automatically unsubscribe from the inner Observable

- switchMap: Stops the current operation and performs the new operation
- concatMap: Performs each operation one at a time, in order
- mergeMap: Performs each operation concurrently
