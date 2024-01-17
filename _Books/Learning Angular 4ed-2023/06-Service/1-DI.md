
The injector is responsible for instantiating and bootstrapping the required dependencies to be ready for use when injected into a consumer. 

## Service
An Angular service is a TypeScript class marked with the @Injectable decorator. 
The decorator identifies the class as an Angular service that can be injected into other Angular artifacts such as components, directives, or even other services. It accepts an object as a parameter with a single property named providedIn.

```ts
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }
}
```
When we create a new Angular service, the Angular CLI registers this service with the root injector of the application by default. 

```ts
@NgModule({
  providers: [ProductsService],
})
```
providers in @NgModule decorator register a service is the same as configuring the service with providedIn: 'root' when the Angular module is imported directly from the main application module. 
The main difference between them is that the providedIn syntax is tree shakable.

Tree shaking is the process of finding dependencies that are not used in an application and removing them from the final bundle. In the context of Angular, the Angular compiler can detect Angular services that are not used and delete them, resulting in a smaller bundle.

When you provide a service using the @NgModule decorator, the Angular compiler cannot say if the service is used somewhere in this module. So, it includes the service in the application bundle a priori. 
Thus, it is preferable to use the @Injectable decorator over the @NgModule one

The root injector is not the only injector in an Angular application. Lazy-loaded modules and components have their own injectors too. 

Whenever an Angular component defines a token in its constructor, the injector searches for a type that matches that token in the pool of registered providers.
