# Angular Injector In 5 Minutes
https://levelup.gitconnected.com/angular-injector-in-5-minutes-54d173c97541

Angular Injector’s responsibility is to `provide a configured dependency` into components or services that use that dependency. 
The reason its called an injection is because the association between a dependency and consumer of the dependency `happens at runtime`.

An “injection” is configured via the `Injection token`, which is part of the Angular `providers array` in a Component or a Module.
The Injector mechanism using this Injection token creates an instance of the provider and injects it into a Component or Service for usage.

When Application bootstraps, Angular creates a `RootModule injector` for the root of all modules. 


## The @Injectable decorator
To make a service injectable, you must decorate it with @Injectable() decorator in order to `indicate to Angular that the service is available for injection`. 

Classes decorated with @Component and @Directive in Angular are automatically marked as @Injectable, so there is no need to explicitly use the @Injectable decorator for these classes.

The @Injectable decorator has an important “providedIn” property which specifies `where to provide the dependency`. Using the ‘root’ string here will make the service available to the entire application.

Here is an example:
What this means is that the GetRandomUserService won't be injected into your application tree if your application didn’t import the SharedModuleModule.
```
@Injectable({
    providedIn: SharedModuleModule
})
export class GetRandomUserSerivce {

}
```