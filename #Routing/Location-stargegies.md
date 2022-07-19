In a non-SPA, changing any character in the preceding URL results in a new request to the server.

In SPAs, modifying the URL without forcing the browser to make a server-side reques

Angular offers two location strategies for implementing client-side navigation:

- HashLocationStrategy

A hash sign (#) is added to the URL, and the URL segment after the hash uniquely identifies the view to be used as a web page fragment. This strategy works with all browsers, including the old ones.

- PathLocationStrategy (default)

This History API–based strategy works only in browsers that support HTML5.

```
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

...

@NgModule({
  ...

  providers:[{provide: LocationStrategy, useClass: HashLocationStrategy}]  1
 })
```
