
# Course content
8 sections • 72 lectures • 5h 33m total length


## Getting Started
- Course introduction

- Rxjs Overview

- Quick Start
  
  The Observables are like data or event generators with some logic stored inside.


- Course plan

- Learning Tips

## Observable - how does it work
- Module Introduction

- Array vs Stream

- Observable, Subscription, Observer - Key Elements

Observable is a object has some callback functions inside
  ```
    const observable$ = new Observable( subscriber => {
        subscriber.next('A');
        subscriber.next('B');
    })
  ```

Observer describe the reaction to each emitted value
  ```
    const observer = {
        next: vale => console.log(vale);
    }
  ```
Subscription runs the callbacks inside Observable and wrap the Observer into a subscriber objet and pass it to Observable
```
    observable$.subscribe(observer)
```

Simply pass a function instead of passing the observer object
```
    observable$.subscribe((value) => console.log("receive :", value))
```

- Warm-up Observable - Observable, Observer, Subscription
  
- Warm-up Observable - Multiple Subscriptions

Each new subscription runs the code in the Observable independently from other subscriptions

- Observable Basics

- Marbles Introduction

- Marbles - Next, Error, Complete
  
- Marbles - Notification Types Summary

- Marbles - Incorrect Scenarios

- Marbles - Appearance

- Marbles - Game

- Marbles - Docs

- Marble Diagrams and Notification Types

- Module Summary

## Exercises: Observable, Observer and Subscription
- Module Introduction

- Subscription Lifecycle
  
- Execution Timing - Empty Observable
 
- Synchronous Emission - Next Notification
 
- Asynchronous Emission - More Next Notifications
 
- Teardown - Complete Notification
 
- Error Notification

- Full Observer
  
- Order

- Cancellation - Unsubscribe

- Module Summary

## Types of Observable
- Module Introduction
  
- Cold Observable
  produce independently for each subscription
  subscription run the Observable's logic independently
  
  HTTP request, Timer, Set of values

- Hot Observable
  subscriptions receive same value at same time
  All subscriptions share the same source

  DOM events, State, Subjects

- Hot vs Cold - Comparison

- Module Summary

- Hot vs Cold

## Creation Functions
- Module Introduction
  
- of - How Creation Functions work

- from

- Creation Functions - of, from

- fromEvent

- timer

- interval

- Creation Functions - fromEvent, timer, interval

- forkJoin - Handle multiple HTTP calls

- forkJoin - Error Scenario

- combineLatest - Reacting to multiple input changes

- Creation Functions - forkJoin, combineLatest

- Module Summary

## Pipeable Operators
- Module Introduction
- Operator Stacking
- filter
- map
- tap
- Learn more: tap
- debounceTime
- catchError
- Pipeable Operators
- Flattening Operators
- Flattening Operators - Static Example
- Flattening Operators - Dynamic HTTP Request
- Flattening Operators - Error Handling - First Solution
- Flattening Operators - Error Handling - Second Solution
- Flattening Operators - Concurrency - concatMap
- Flattening Operators - switchMap
- Flattening Operators - mergeMap
- Flattening Operators - Side by Side Comparison

- Module Summary


## Subjects
- Module Introduction
  Subject is a combination of observable and observer

  Subject multicast values to multiple observers. next notification will be multicast to all subscribers

  Subject is hot observable



- Multicasting
- Subject vs Observable vs Observer
- Subject in Action
- BehaviorSubject - Concept
- BehaviorSubject in Action
- Module Summary
- Subjects


## Course Summary
- Course Summary
- Congratulations & Further Steps
