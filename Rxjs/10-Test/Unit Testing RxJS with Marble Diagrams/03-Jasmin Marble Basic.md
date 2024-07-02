# Learning Jasmine Marble Basic

## Jasmine Marble

It is a node package that integrates with RxJS Scheduler and allows us to assert the behavior of observables and
operators synchronously

- Viusal Testing
- Mockds Observables
- Synchronous Testing
- Visual Time
- Support Jasmine Framework
- Custom Matcher

## Frame

Jasmine-marbles converts observable sequences into frames.
Frame is a JSON that consists of RxJS notification object that wraps the actual delivered value with additional metadata and message type.

```json
{
  "frame": 0,
  "notification": {
    "error": undefined| "error",
    "kind": "N"| "C"| "E",    // next | complete | error
    "hasValue": true|false,
    "value": "a"
  }
}
```

Jasmine-marbles toBeObservable() method generates the frames from both provided and expected observables and then compares each frame one by one.
In order to create the frame, the provided observable must have a subscribe method, and therefore, it has to be an observable.

```ts
describe( 'COLD, () => {
  it('can search an alphabet', () => {
  const provided = search ('e');  // should return an observable
  const expected = cold(' (el)');
  expect(provided).toBeObservable(expected);
  }) ;
}) ;
```

## Setup

```bash
npm i -d jasmine-marbles
```

https://github.com/rupeshtiwari/UnitTesting-RxJS-Marble-Diagrams
