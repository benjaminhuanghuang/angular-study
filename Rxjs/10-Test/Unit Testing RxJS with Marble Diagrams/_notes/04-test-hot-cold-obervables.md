# Unit Testing with Hot and Cold Observables


## HOT Observable
- Closes over the producer
- 无论有没有观察者进行订阅，事件始终都会发生, Start emitting values regardless of any subscription
- 与订阅者们的关系是一对多的关系 Multicast，多个订阅共享同一个实例，从订阅开始接受到值，每个订阅接收到的值是不同的，取决于它们是从什么时候开始订阅。All subscribers get latest values
- 当有多个Observer的事件，事件是不独立
- Hot Observable 想象成一个广播电台，所有在此刻收听的听众都会听到同一首歌, mouse click events
```
let obs$ = from([1, 2, 3, 4, 5]).pipe(
    publish()
) as ConnectableObservable<any>;
obs$.connect();

obs$.subscribe(data => { console.log("1st subscriber:" + data) });
setTimeout(() => {
    obs$.subscribe(data => { console.log("2st subscriber:" + data) });
}, 2100);
```


## Cold Observable
- 只有观察者订阅了，才开始执行发射数据流的的带啊吗
- 与Observer只能是一对一的关系，当有多个不同订阅者时，消息是重新完整发送到
- 当有多个Observer的事件，事件是独立的
- Cold Observable 一张音乐CD，人们可以独立购买并听取它

```
let obs$ = from([1, 2, 3, 4, 5]);

obs$.subscribe(data => { console.log("1st subscriber:" + data) });
obs$.subscribe(data => { console.log("2nd subscriber:" + data) });


let obs$ = from([1, 2, 3, 4, 5]);

obs$.subscribe(data => { console.log("1st subscriber:" + data) });
setTimeout(() => {
    obs$.subscribe(data => { console.log("2nd subscriber:" + data) });
}, 1100);
```