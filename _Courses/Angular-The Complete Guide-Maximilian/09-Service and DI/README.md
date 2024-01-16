## What is service
Central place to manage data


## Dependency Injection
Angular inject the instance of service into the component

Provide service on component and inject service into component
```ts
  @Component({
    providers: [LoggingService]
  })
  export class NewAccountComponent {
    constructor(private loggingService: LoggingService) {}
  }
 
```
Provide service on module and inject service into component
```ts
  @NgModule({
    providers: [LoggingService]
  })
  export class AppModule {}
```

Inject service into service
@Injectable() is required for service to be injectable
```ts
  @Injectable()
  export class AccountsService {
    constructor(private loggingService: LoggingService) {}
  }
```



## Hierarchical Injector
- AppModule: Same instance of service is available application wide.
- AppComponent: Same instance of service is available for all components (but not for other services)
- Any other component: Same instance of service is available for the component and all its child components
