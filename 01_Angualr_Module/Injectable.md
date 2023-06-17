@Injectable() is a decorator used in TypeScript and Angular to indicate that a class can be injected with dependencies. It is part of the Angular Dependency Injection (DI) system, which is a key feature of the Angular framework.

When you mark a class with the @Injectable() decorator, it allows the class to be recognized by the Angular compiler and enables dependency injection for that class. This means that Angular can create instances of that class and resolve any dependencies required by that class.


```
import { Injectable } from '@angular/core';

@Injectable()
export class MyService {
  // Service implementation goes here
}
```
In the above example, the MyService class is marked with the @Injectable() decorator. This allows Angular to inject dependencies into MyService whenever it is requested.