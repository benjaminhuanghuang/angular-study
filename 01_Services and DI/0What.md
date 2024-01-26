## Dependency Injection
"DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself"

- substitute out the implementation of B for MockB during testing
- share a single instance of the B class across our whole app (e.g. the Singleton
pattern)
- create a new instance of the B class every time it is used (e.g. the Factory pattern)


The major benefit of using Dependency Injection is that the client component needn’t
be aware of how to create the dependencies. All the client component needs to
know is `how to interact with those dependencies`. 

## benefit
- dependency implementation can be swapped at run-time
- we can configure how the dependency is created. For
instance, we might define a “constant” API_URL, but then inject a different value in
production vs. development


Within Angular’s DI system, instead of directly importing and creating a new instance
of a class, instead we will:
- Register the “dependency” with Angular
- Describe how the dependency will be injected
- Inject the dependency

Dependency injection in Angular has three pieces:
- the Provider (also often referred to as a binding) maps a token (that can be
a string or a class) to a list of dependencies. It tells Angular how to create an
object, given a token.

- the Injector that holds a set of bindings and is responsible for resolving
dependencies and injecting them when creating objects

- the Dependency that is what’s being injected

```
// Create an _injector_ and ask for it to resolve and create a UserService
const injector: any = ReflectiveInjector.resolveAndCreate([UserService]);

// use the injector to **get the instance** of the UserService
this.userService = injector.get(UserService);
```

The ReflectiveInjector is a concrete implementation of Injector that uses reflection to look up the proper parameter types.
