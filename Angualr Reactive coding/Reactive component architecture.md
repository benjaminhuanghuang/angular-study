
## Reactive component architecture

Container:
- Aware of store
- Dispatches actions
- Reads data from store

Presentational:
- Not aware of store
- Invokes callbacks via `@Output()`
- Reads data via `@Input()`
