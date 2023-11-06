# Chapter 3: A Walkthrough of the Application
## The backend
https://github.com/PacktPublishing/Reactive-Patterns-with-RxJS-7-in-Angular-applications

Add proxy.config.json to the root of the frontend project
```json
{
  "/api": {
    "target": "http://localhost:3001",
    "secure": false
  }
}
```

## The frontend: 
Bootstrap 

PrimeNG 
```
  npm i primeng primeicons
```

import primeng modules in app.module.ts
```ts
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
```
