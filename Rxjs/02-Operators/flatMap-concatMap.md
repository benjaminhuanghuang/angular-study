concatMap操作符的功能和flatMap是非常相似的，
concatMap 最终输出的数据序列和原数据序列是一致，它是按顺序链接Observables，而不是合并(flatMap用的是合并)。


![](./flatMap.png)

![](./concatMap.png)