

## Module Introduction
Set up the sample application
Install and initialize @ngrx/store
Define the state and actions
Build a reducer to process actions and set
the store state
Dispatch an action to change state
Subscribe to state change notifications


## setup
Install library
```bash
npm i @ngrx/store
```

Import StoreModule in app.module.ts
```ts
import { StoreModule } from '@ngrx/store';

imports: [
  StoreModule.forRoot({}),
]
```
