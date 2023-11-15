
## Course outline
First Look at NgRx
Developer Tools and Debugging
Strongly Typing Actions with Action Creators
Selecting State with Selectors
Working with Effects
Listen to Router State with Router Store
Manage Collections with Entity Adapter
Manage Local State with Component Store
Final Words


## Purpose of NgRx
- Provide a framework for building reactive applications in Angular
- Managing global and local state
- Isolation of side effects
- Entity collection management
- Integration with the Angular Router
- Developer tooling


## NgRx's state lifecycle
When use do something in the UI, UI will use NgRx store library to dispatch an action, the action contains type and payload,

The action will be handled by a reducer, the reducer will update the store. There is only one global store in the application.
Store is a javascript object, it contains the state of the application.

The UI component can subscribe to specific state changes with selector. 
Selector is a pure function used for obtaining slices of store state.
The state lives beyond the life of the component. If the component is reloaded, it resubscribes the store and immediately gets the latest state from the store. 

## When to use NgRx
Your application has a lot of user interactions
Your application has a lot of different data sources
Managing state in services is no longer sufficient

## The SHARI Principle
Shared: state that is accessed by many components and services.
Hydrated: state that is persisted and rehydrated from external storage.
Available: state needs to be available when re-entering routes.
Retrieved: state that must be retrieved with a side effect.
Impacted: state that is impacted by actions from other sources.

## Key Concepts of NgRx
Type safety
Immutability and
performance
Encapsulation
Serializable
Testable

## Don't Use NgRx When
Your team is new to Angular, RxJS Observables, and Redux
Your application is simple with little shared state
You need the shortest or quickest path to write an app
