# Chapter 6: Combining Streams
Use case:
User will fill out some criteria in the Filters area and click on the See results button to search.



combineLatest() will combine the latest values emitted by the input observables. 
Every time one of the observables emits, combineLatest will emit the last emitted value from each

BehaviourSubject is a special type of subject that requires an initial value and always retains the last value to emit it to new subscribers. 
In other words, if you have any subscribers coming late to the game, they will get the last value emitted by the stream. 
This will always give you a value when you subscribe.
