# The ABCs of Angular : Dependency Injection Part 1
https://dev.to/ismailabbi/the-abcs-of-angular-dependency-injection-part-1-2ji0

Error "no provider" means that the Angular Dependency Injection system can't instantiate a given dependency because it doesn't know how to create it.

In Angular, we define how to create our dependencies using the providers array in the module.

```
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: LoggerService,
    useClass: LoggerService
  }],
  bootstrap: [AppComponent]
})
```
In the providers array, we add a new object. To understand this object, we need to ask two questions:

Which class do we want to instantiate and return? This is the value of the `useClass property`.
When to return this instantiated class? Each time we call LoggerService as a dependency, which is defined by the `provide property`.

# The ABCs of Angular : Dependency Injection Provider & Provide Part 2
In Angular, providers are an array of instructions, each provider is an instruction or recipe that describes how an object for a particular class, string, token, etc., is created.

This Provider object contains two properties: provide and useClass.

The provide property represents the `identifier` of the provider, which can be either a `string or an instance of InjectionToken`.
```
providers: [
  { provide: LoggerService, useClass: BetterProductService }
]
```

inject an instance of LoggerService into a component's constructor using LoggerService as the token.
The provide: LoggerService is a token used to identify what we want to inject.
```
Constructor(public loggerService:LoggerService)
```
When Angular encounters the need to inject LoggerService in a constructor, it will search the providers and find LoggerService. 
However, instead of injecting LoggerService, it will inject BetterProductService. 

Angular doesn't complain if the token is used multiple times. In the following example, the token LoggerService is used twice, but the last registration (BetterProductService) takes precedence.
```
  providers: [
    { provide: LoggerService, useClass: LoggerService },
    { provide: LoggerService, useClass: BetterProductService }
  ]
```


## use string as a token
```
providers: [{ provide: 'LoggerService', useClass: LoggerService }]
```

use the @Inject decorator
```
export class AppComponent {
  constructor(@Inject('LoggerService') private loggerService: LoggerService) {}
}
```
using string tokens can introduce naming collisions if multiple parts of your application use the same string for different purposes. This can lead to conflicts and make your code harder to understand.


## use InjectionToken

An Injection Token is similar to a string token, but instead of using a hardcoded string, we create the Injection Token by instantiating the InjectionToken class. This ensures that the tokens are always unique.

```
import { InjectionToken } from '@angular/core';

export const LoggerServiceToken = new InjectionToken<string>('LoggerService');

// Register the Injection Token in the providers array:
providers: [
  { provide: LoggerServiceToken, useClass: LoggerService },
]

// inject the LoggerService using the Injection Token in your component:
export class AppComponent {
  constructor(@Inject(LoggerServiceToken) public loggerService: LoggerService) {}
}
```
