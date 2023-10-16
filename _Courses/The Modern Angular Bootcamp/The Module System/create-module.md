## Creating a Module
```
  # routing flag tells Angular to make this module ready for navigation, 
  # routed module is loaded when the user navigates to a specific path
  ng generate module MODULE_NAME --routing

  or

  ng g m MODULE_NAME --routing
```

The folder structure will look like this:
```
  src/app/MODULE_NAME
  ├── MODULE_NAME-routing.module.ts
  ├── MODULE_NAME.module.ts
```

MODULE_NAME.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MODULE_NAMERoutingModule } from './MODULE_NAME-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MODULE_NAMERoutingModule
  ]
})
```

MODULE_NAME-routing.module.ts
```
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MODULE_NAMERoutingModule { 

}
```
