# Hot vs Cold Observables Analogy

Hot Observable: Like cable TV, continues emitting regardless of whether you are subscribed to them or not.

Cold Observable: Like watching a streaming service. If you stop it and walk away it stops emitting and when you return you can pick up where you left off.

Hot Observable：有一个独立于Observable对象的生产者，这个生产者的创建与subscribe调用无关，subscribe调用只是Observer连接上"生产者"。无论有没有subscribe订阅，事件始终都会发生，当Hot Observable有多个订阅者时，它与订阅者的关系是`一对多`的关系。

```ts
const dataStream$ = interval(1000).pipe(take(3));

const subject = new Subject();     // Hot Observable
dataStream$.subscribe(subject);

subject.subscribe((data)=>console.log("observer1:",data));

setTimeout(()=>{
  subject.subscribe((data)=>console.log("observer2:",data));
},2000);

// observer1: 0
// observer1: 1
// observer1: 2
// observer2: 2        // observer2 only gets the values after it subscribes
```

Cold Observable：每一次的订阅都会产生一个新的生产者。只有subscribe订阅时才开始执行发射数据流的代码，Cold Observable与订阅者只能是一对一的关系，通俗理解不管你什么时候来我一直都在，当有多个不同的订阅者时，消息是重新完整发送的，他们各自的事件是独立的。

```ts
const dataStream$ = interval(1000).pipe(take(3));    // Cold Observable

dataStream$.subscribe((data)=>console.log("observer1:",data));

setTimeout(()=>{
  dataStream$.subscribe((data)=>console.log("observer2:",data));
},2000);
// observer1: 0
// observer1: 1
// observer1: 2
// observer2: 0
// observer2: 1
// observer2: 2
```
