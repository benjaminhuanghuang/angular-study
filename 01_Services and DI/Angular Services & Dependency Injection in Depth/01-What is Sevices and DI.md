# Service and DI

## Service

A service in Angular is a re-usable TypeScript class that can be used in multiple components across our Angular application.

We can also use services to communicate between two non-related components in Angular


## What is Dependency

A dependency is a relationship between two software components where
one component relies on the other component to work properly.

## Disadvantage of not using Dependency Injection (DI)

1. Without dependency injection, a class is tightly coupled with its dependency.
This makes a class non-flexible. Any change in dependency forces us to change
the class implementation.
2. It makes testing of class difficult. Because if the dependency changes, the class
has to change. And when the class changes, the unit test mock code also has to
change.


## Advantage of using Dependency Injection (DI)

1. Dependency injection or DI keeps the code flexible, testable, and mutable
2. Classes can inherit external logic without knowing how to create it.
3. Dependency injection benefits components, directives and pipes.
