
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
