# 4 Types of Subject
There 4 types of Subject in RxJS: 
- Subject
- BehaviorSubject
- AsyncSubject
- ReplaySubject

## Subject
Share data among multiple subscribers with Subjects
subject$.next(data) will emit to all of the subscribers

With the subject, you can subscribe to messages, but also push new data to the stream.

## BehaviorSubject
Subject 其中的一个变体就是 BehaviorSubject，它有一个“当前值”的概念。它保存了发送给消费者的最新值，
当有新的观察者订阅时，会立即从 BehaviorSubject 那接收到“当前值”，在定义一个 BehaviorSubject 时需要有初始值。

if we are not interested in single event but more in state 

behavior subject stores the latest limited value in memory, whenever a new subscription is made,
it emit the latest value to the subscription

BehaviourSubject is a special type of subject that requires an initial value and always retains the last value to emit it to new subscribers. 
In other words, if you have any subscribers coming late to the game, they will get the last value emitted by the stream. 
This will always give you a value when you subscribe.


## ReplaySubject
类似于 BehaviorSubject，可以发送旧值给新的订阅者，但是不仅是‘当前值’，还可以是之前的旧值。


## AsyncSubject
只有当 Observable 执行完成时(执行 complete())，它才会将执行的最后一个值发送给观察者。
