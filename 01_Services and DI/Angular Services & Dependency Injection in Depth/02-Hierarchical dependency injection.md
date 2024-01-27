# Dependency Injection

## providers on component

When we provide a service on multiple components, each component get its own instance of that service.

```ts
@Component({ 
 selector: 'app-goods-list',
 providers: [ GoodsListService ]
})
```

### Hierarchical Injection

When we provide a dependency on a component, the `same instance` of that dependency is injected in component class and all its child components and their child components. This is called as hierarchical injection.

### Dependency Override

When we provide a dependency on a component and we also provide a dependency on its child component, child component dependency instance will override its parent
component dependency instance.

Child component provider overrides the instance if parent component provider.

### Dependency injection on Root Component

When we provide a dependency on root component, kk`same instance` of that dependency is injected to all components, directives and services.

```ts
@Component({ 
 selector: 'app-root',
 providers: [ MyService ]
})
export class AppComponent { }
```

## Module Injector

We can also inject a service from Module class.
In that case `same instance` of the dependency will be available throughout the Angular application. 
In this way we implement singleton pattern where a single instance is shared throughout the application.

```ts
@NgModule ({
  providers: [MyService],
})
export class AppModule { }
```
