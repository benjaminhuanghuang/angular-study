# Unit Testing by Mocking Observable Values and Testing RxJS Operators



```ts
  it('should test subscription on hot observable', () => {
    const provided = hot('-a-^b---c-|');
    const subscription = '^------!';
    expect(provided).toBeObservable(cold('-b---c-|'));
    expect(provided).toHaveSubscriptions(subscription);
  });
```
 In marble testing, it's a nice feature that you do not need to subscribe your observable explicitly.
 We can use the toBeObservable method for asserting a test observable that under the hood will subscribe to our hot observable.
 For drawing test cold observable, you start counting from the subscription point of the provided observable.

## Mocking Observable Values

```ts
  cold('a|', { a: 1 });
```

## Test RxJS Operators

```ts
  it('should concat 2 observables', () => {
    const $obs1 = cold('---a---b|');
    const sub1 =       '^-------!';
    const $obs2 = cold('---c---d|');
    const sub2 =       '--------^-------!';
    const $result = $obs1.pipe(concat($obs2));

    const $expected = cold('---a---b---c---d|');

    expect($result).toBeObservable($expected);
    expect($obs1).toHaveSubscriptions(sub1);
    expect($obs2).toHaveSubscriptions(sub2);
  });
```
