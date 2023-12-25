@Injectable() is a decorator used to indicate that a class can be injected with dependencies. 

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
