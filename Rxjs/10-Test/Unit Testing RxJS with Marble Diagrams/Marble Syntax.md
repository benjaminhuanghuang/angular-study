# Marble Syntax

'-' Time, each frame represents 10 milliseconds of time.

'|' The successful completion of an observable.  

'#' An error terminating the observable

'^' Subscription point to the hot observable

'!' Unsubscription point at which a subscription is unsubscribed

'a' Any character value being emitted by the producer

( ) (parenthesis): multiple values together in the same unit of time, Emit a single grouped value on same time frame. Parentheses symbol represent a single synchronous group emission. (ab|) stands for emit a b at 40ms then complete (40ms)

## Sample

'-' or '------' NEVER observable.

'|'             EMPTY observable.

(a|)            of('a'), emits 'a' and complete in a single time frame.

(ab|)            from(['a','b']), emits all values and complete in a single time frame.

## Cold and hot

cold(--a--b--|, { a: 'Hello', b: 'World' }) → Emit ‘Hello’ at 30ms and ‘World’ at 60ms, complete at 90m

hot(--^--a--b--|, { a: 'Hello', b: 'World' })
  Subscription begins at point of caret, then emit ‘Hello’ at 30ms and ‘World’ at 60ms, complete at 90ms.

```ts
it('should multiply by "2" each value emitted', () => {
  const values = { a: 1, b: 2, c: 3, x: 2, y: 4, z: 6};
  const source = cold('-a-b-c-|', values);
  const expected = cold('-x-y-z-|', values);
  const result = source.pipe(map(x => x*2));
  expect(result).toBeObservable(expected);
});
```
