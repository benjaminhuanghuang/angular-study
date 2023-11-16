## 
1. Install browser Redux DevTools Extension

2. Install @ngrx/store-devtools
Expose state to the Redux DevTools Extension

```bash
npm i @ngrx/store-devtools
```

3. Initialize the store devtools in app.module.ts

```ts
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


imports: [
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'APM Demo App DevTools',
      maxAge: 25,
      logOnly: environment.production
    })
  ],
```
