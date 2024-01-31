


The scan() operator is very similar to Array.reduce() but instead of only returning the last value, it emits each intermediate result. 
With scan() we can basically accumulate values and reduce a stream of incoming events to a single value infinitely. This way we can keep track of the previous state without relying on external state.

```ts
const direction$ = keydown$.pipe(
    map((event: KeyboardEvent) => DIRECTIONS[event.key]),
    filter(direction => !!direction), // filter the key that is not in the DIRECTIONS
    startWith(INITIAL_DIRECTION), //
    scan(nextDirection), // ignore the opposite direction
    distinctUntilChanged()
);

```
## resources
Taming snakes with reactive streams 
https://blog.thoughtram.io/rxjs/2017/08/24/taming-snakes-with-reactive-streams.html
