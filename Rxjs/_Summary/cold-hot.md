# 关于 cold 和 hot

cold Observable 和 hot Observable 的差异性是学习 RxJS 绕不开的概念，而且经常和 Observable 的 lazy 特性搞混。无论是 cold 还是 hot，都具有 lazy 的特性，即都是在 Observer 进行了 subscribe 操作时才对 Observer 推送数据。

某种意义上来说它们区别在于数据的来源，一般来说 cold Observable 自己维护着数据，无论何时一个 Observer 的订阅的到来，都从头将数据推送到 Observer；
而 hot Observable 的数据来源于外部，比如最经常用到的 fromEvent 将事件流转换为 Observable，即使没有 Observer 进行订阅，事件是时刻在发生着的，当 Observer 订阅时只能收到下一次的事件，且对多个 Observer 数据是共享的。
