## Hierarchical Injection
When we provide a dependency on a component, the same instance of that dependency
is injected in component class and all its child components and their child components.
This is called as hierarchical injection.

```ts
@Component ({
  selector: 'app-header',
  templateUrl: /header.component.html',
  providers: [SubscribeService] // Provide service in the parent component
})
export class HeaderComponent {
  constructor(private subService: SubscribeService){

  }
}


@Component ({
  selector:'app-sidebar',
  templateUrl: './sidebar. component.html',
  // providers: [SubscribeService] // Don't provide service in the child component
})
export class SidebarComponent {
  constructor (private subService: SubscribeService){   // Inject same instance of the service into the child component 
  }
  OnSubscribeC(){
    this. subService.OnSubscribeClicked('quaterly');
  }
}
```

## Dependency Override
When we provide a dependency on a component and we also provide a dependency on
its child component, child component dependency instance will override its parent
component dependency instance.


## Dependency injection on Root Component
When we provide a dependency on root component, same instance of that dependency is
injected to all components, directives and services. 

```ts
@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SubscribeService]
})
export class AppComponent {
title = 'angular-services-dependency-injection';
}

```

## Module Injector
We can also inject a service from Module class. In that case same instance of the
dependency will be available throughout the Angular application.
In this way we implement singleton pattern where a single instance is shared throughout the application.
```ts
@NgModule ({
  providers: [SubscribeService], // Provide service in the module
})
export class AppModule { 

}
```
