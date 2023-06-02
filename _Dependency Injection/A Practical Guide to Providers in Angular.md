# A Practical Guide to Providers in Angular
https://dev.to/angular/a-practical-guide-to-providers-in-angular-3c96

## Angular’s Dependency Injection system

Services contain business logic code that we want to keep separate from view logic.

@Injectable() registers a service within the Angular DI system:
```
@Injectable({
  providedIn: 'root'
})
export class MyService {
}
```
The configuration option providedIn: 'root' specifies providing service at the root of the application, it a `single instance` of the service is available across the `entirety of the app`.



injecting service into the consuming code (a component) as a constructor parameter:
```
@Component({
  // standard component metadata here
})
export class MyComponent {
  constructor(private myService: MyService) { }
}
```

In Angular v14, you have a new option to use the inject() function instead of injecting the service into the consumer as a constructor parameter.


Another way to register dependencies is to provide them manually through the providers array. 
```
@NgModule({
  imports: // stuff here
  declarations: // stuff here
  providers: [
    MyService       // register a service
  ]
})
export class AppModule {
  ...
}
```