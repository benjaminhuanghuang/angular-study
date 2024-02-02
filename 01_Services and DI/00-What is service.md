# Angular service

A service is a `global class` that `can be injected` in any component.

It's used to encapsulate code that can be common between multiple components in one place instead of repeating it throughout various components.

Angular services are the parts of your application that don’t interact directly with the UI. Any
code creating UI elements or handling user input should be in a component

Well-designed applications have most of the application logic and I/O inside a service.

## Singletons

  Angular services are `singletons`, you create them `once` and can use them anywhere in the application. Components that define that service as a dependency will share that instance.

  This technique reduces memory use and allows services to act as brokers for `sharing data` between components.

- Dependency injection

  Dependency injection is a system that supplies instances of a dependency at the time
  your own class is instantiated. 帮助 service 的使用者(通常是 Component)自动生成 service 的 instance,

## Create Service

```
  ng g service services/<service-name>
```

Serice should be added to the provider metadata property of a component or module to use them.

Where you include a service depends on whether it’s local to a component or used throughout the module.

```
// app.module.ts

@NgModule({
{

}
providers: [
    MyService,
  ],
})
export class AppModule { }
```
