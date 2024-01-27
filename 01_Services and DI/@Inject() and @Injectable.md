https://angular-training-guide.rangle.io/di/angular2/inject_and_injectable


## @Inject()

@Inject() is a manual mechanism for letting Angular know that a parameter must be injected.

```ts
import { Component, Inject } from '@angular/core';
import { ChatWidget } from '../components/chat-widget';

@Component({
  selector: 'app-root',
  template: `Encryption: {{ encryption }}`
})
export class AppComponent {
  encryption = this.chatWidget.chatSocket.encryption;

  //
  constructor(@Inject(ChatWidget) private chatWidget) { }
}
```

## @Injectable()

@Injectable() is a decorator used to indicate that a class can be injected with dependencies. 

@Injectable() lets Angular know that a class can be used with the dependency injector.

When you mark a class with the @Injectable() decorator, it allows the class to be recognized by the Angular compiler and enables dependency injection for that class. This means that Angular can create instances of that class and resolve any dependencies required by that class.

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',    // Add this line, we don't need to add this service to providers array of app.module.ts
})
export class MyService {
  // Service implementation goes here
}
```

In the above example, the MyService class is marked with the @Injectable() decorator. This allows Angular to inject dependencies into MyService whenever it is requested.

### @Injectable({ providedIn: 'root' })

it means that the service should be provided at the root level of the application. Angular will create a single instance of the service and make it available for injection throughout the entire application. 
