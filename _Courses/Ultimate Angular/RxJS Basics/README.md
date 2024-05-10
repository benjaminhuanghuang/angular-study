# RxJS Basics

By Brian Troncone
7 Chapters 47 Lessons 4 Hours

https://ultimatecourses.com/learn/rxjs-basics
https://www.bilibili.com/video/BV1iy4y1R7vG/

## What are we going to learn?
• Dive into the behaviour of Observables
• Learn how to create Observables from nearly any source
• Deep dive into pipeable operators
• Exploring common patterns and use cases for all operators
• Feel comfortable and effective using RxJS

## Table of Contents
Part 1. Getting Started with RxJS 7 lessons
- The Missing Introduction to RxJS
- Configuring your project to use RxJS
- Create your first observable
- Understanding observers, partial observers, and subscribers
- Deliver values asynchronously with observables
- Manage observable subscriptions with unsubscribe
- Introduction recap and what’s next

Part 2. Creation Operators 6 lessons
- Introduction to creation operators
- Create observables from DOM events using fromEvent
- Create observables from static values using of
- Turn arrays, iterators, and promises into observables using from
- Emit items based on a duration with interval and timer
- Creation operators recap and what’s next

Part 3. Getting Started with Operators 9 lessons
- Introduction to operators
- Introduction to marble diagrams
- Transform streams using map, pluck, and mapTo
- Ignore unneeded values with filter
- Lab 1. Create a scroll progress bar with fromEvent and map
- Accumulate data over time using reduce
- Manage state changes incrementally with scan
- Lab 2. Create a countdown timer using fromEvent, map, and scan
- Debug your observable streams with tap

Part 4. Filtering Operators 5 lessons
- Introduction to filtering operators
- Emit a set number of values from a stream with take
- Complete a stream when a condition is met with takeWhile
- Complete a stream based on another stream using takeUntil
- Ignore non unique values using distinctUntilChanged

Part 5. Rate Limiting Operators 5 lessons
- Introduction to rate limiting operators
- Take the latest value after a pause debounceTime
- Ignore values during windows using throttleTime
- Sample a stream on a uniform duration using sampleTime
- Audit a stream for a duration after an event occurs using auditTime

Part 6. Transformation Operators 8 lessons
- Introduction to transformation operators
- What’s a flattening operator?
- Flatten inner observables as they occur with mergeMap
- Switch to a new observable on emissions using switchMap
- Subscribe to observables in order with concatMap
- Ignore emissions when an inner observable is active with exhaustMap
- Catch errors on observables with catchError
- Lab 3. Create an HTTP polling solution

Part 7. Combination Operators 7 lessons
- Introduction to combination operators
- Append values to a stream using startWith and endWith
- Queue observable execution using concat
- Combine multiple active observables using merge
- Receive the latest values from multiple observables on emissions using combineLatest
- Receive the latest value from multiple observable on completion with forkJoin
- Lab 4. Create a Mortgage Calculator
