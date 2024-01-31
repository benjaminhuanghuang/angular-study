# [译] RxJS 游戏之贪吃蛇
https://juejin.cn/post/6844903589106860039

https://github.com/thoughtram/reactive-snake


## My setup
```
npm i -g parcel-bundler

npm init
npm install rxjs
```

Run
```
    parcel index.html
```

在响应式编程中，编程无外乎data stream及 input stream
关键在于找出那些代表变化产生的主要源头，然后将其组合起来以计算出所需要的一切，例如游戏状态。
## User input: 

keydown$，每次按键它都会发出值。
```ts
let keydown$ = Observable.fromEvent(document, 'keydown');
```

direction$ 代表了蛇的方向，它是由 keydown$ 转换而成的。

scan() like reduce, but emits the current accumulation state after each update, Useful for encapsulating and managing state.
Using scan() 就可以保存前一个方向而无需依靠外部状态。

```ts
const direction$ = keydown$.pipe(
        map((event: KeyboardEvent) => DIRECTIONS[event.key]),
        filter(direction => !!direction), // filter the key that is not in the DIRECTIONS
        startWith(INITIAL_DIRECTION), //
        scan(nextDirection), // ignore the opposite direction
        distinctUntilChanged()
    );
```

- 玩家的分数: snakeLength$
BehaviorSubject 是一种特殊类型的 Subject，它表示一个随时间而变化的值, 当观察者订阅了 BehaviorSubject，它会接收到最后发出的值以及后续发出的所有值。它的独特性在于需要一个初始值，因此所有观察者在订阅时至少都能接收到一个值。

使用 share() 来允许多次订阅 Observable
```ts
let snakeLength$ = length$.pipe(
    scan((step, snakeLength) => snakeLength + step),
    share()
);
```
- Timer: tick$
```ts
let ticks$ = Observable.interval(SPEED);
```
