# Subjects and multicasting operators (9 lessons)
A multicasted Observable uses a Subject under the hood to make multiple Observers see the same Observable execution.

##  What’s a Subject?

 
##  Share data among multiple subscribers with Subjects

 
##  Lab: Manage application loading state with Subjects ⭐

 
##  Automate the sharing of observables with multicast and share
 

##  Deliver a starting value to subscribers with BehaviorSubjects ⭐
The difference between a Subject and a BehaviorSubject:
subscribers to a Subject will not receive a value in the future, subscribers to a BehaviorSubject will receive the last value when they first subscribe.
   
##  Lab: Build a basic application store with Subjects ⭐

 

##  Replay history to new subscribers with ReplaySubjects
When a new subscriber subscribes to a ReplaySubject, it will receive a number of values from the past, specified by the buffer size.
 

##  Automate multicasting and replaying with shareReplay

 

##  Deliver the last value on complete with AsyncSubjects
The subscriber only receive the last value of the Observable only when the Observable completes.
