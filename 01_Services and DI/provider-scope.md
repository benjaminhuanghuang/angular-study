# Understanding provider scope in Angular

https://itnext.io/understanding-provider-scope-in-angular-4c2589de5bc

Service is just a TypeScript class with or even without @Injectable decorator.

To create a service all we need to do is create a class
```ts
  export class VoteService {}
```

register it in providers array of @NgModule
```ts
import {VoteService} from './vote.service';
...

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent],
  providers: [VoteService]
})
```

The second way (more preferred in Angular 6) is to use @Injectable decorator and specify providedIn property
```ts
import { Injectable } from '@angular/core';

@Injectable({   
  providedIn: 'root', 
}) 
export class VoteService { }
```

`root` means that we want provide the service at the root level (AppModule)

When you provide the service at the root level, Angular creates a single, shared instance of service and injects into any class that asks for it. 
Registering the provider in the @Injectable metadata also allows Angular to optimize an app by removing the service if it turns out not to be used after all.

When you add a service provider to root module (root injector), it is available for whole application.
