

In Angular, providers are an array of instructions, each provider is an instruction or recipe that describes how an object for a particular class, string, token, etc., is created.

This Provider object contains two properties: provide and useClass.

The provide property represents the `identifier` of the provider. The identifier can be string, injection token, or class.

```
providers: [
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


```
providers: [UserService]
```
is a sugar of 
```
providers: [{ provide: 'USER_SERVICE', useClass: UsersService}]
``` 

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
