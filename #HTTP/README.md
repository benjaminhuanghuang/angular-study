Angular comes with its own HTTP library which we can use to call out to external APIs.

In Angular, the preferred method of dealing with async code is using `Observables`


HTTP has been split into a separate module in Angular

```
import {
  // The NgModule for using @angular/common/http
  HttpClientModule,
  // the class constants
  HttpClient
} from '@angular/common/http';
```
In our NgModule we will add HttpClientModule to the list of imports.