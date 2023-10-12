# Introduction to Angular v16 Standalone Components and Signals

https://www.youtube.com/watch?v=zcZ_b5wvuOw

https://hackmd.io/@rstropek/ht1-2023-24-5tr

https://github.com/rstropek/htl-2023-24-5th


## Create project
```
  ng new --routing --standalone --style scss seven-segments
```

## Create component
```
  ng g c Greeting
```

## Routing
app.routes.ts
```
export const routes: Routes = [
  { path: '', redirectTo: 'greeting', pathMatch: 'full' },
  { path: 'greeting', component: GreetingComponent },
  { path: 'saying-goodbye', component: SayingGoodbyeComponent },
];
```

## Signal
Signals are essentially wrappers around the value that inform the host of the signal about
any change so if you put a value in a signal and you change the value of the signal. The signal will automatically go to angular and say I changed
```
import { signal } from '@angular/core';

_digit = signal(0);
```
56:16
