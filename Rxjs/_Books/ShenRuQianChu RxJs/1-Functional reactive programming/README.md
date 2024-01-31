
## What is functional reactive programming?
- Declarative
    Imperative programming is about describing how to do things, while declarative programming is about describing what to do.
    Declarative programming is about building up a description of what should be done, and only when we're done do we evaluate that description.

- Pure functions
    pure function is a function that given the same input will always return the same output, and it also doesn't have any observable side effects.

    Impure function: 
        - change global state
        - change the value of a variable that's defined outside of the function
        - Throw an exception
        - Operate DOM
        - Make an AJAX call 


- Immutability


## What is Reactive programming? 
Reactive programming is a declarative programming paradigm that is based on the idea of asynchronous event processing and data streams.
Take Excel as a sample, when you change a value in a cell, all the formulas that depend on that cell are automatically updated to reflect the new value.
