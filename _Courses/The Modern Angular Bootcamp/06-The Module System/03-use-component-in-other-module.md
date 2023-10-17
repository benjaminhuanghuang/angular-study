

## Export Component from the Module

```ts
@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
    // export component
    COMPONENT_NAME,
  ],
})
export class MODULE_NAME { }
```

## Import Module and use the component

```ts
import { MODULE_NAME } from 'MODULE_PATH';

@NgModule({
  declarations: [
  ],
  imports: [
    MODULE_NAME, 
  ],
  exports: [
  ],
})
export class OTHER_MODULE_NAME { }
```
