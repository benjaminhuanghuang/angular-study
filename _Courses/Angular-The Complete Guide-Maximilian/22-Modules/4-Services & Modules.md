
Provide the same instance of the service to the entire application
```ts
@Injectable({providedIn: 'root'})
export class LoggingService {
  
}
```

Provide the same instance of the service to the component in the entire application
app.module.ts
```ts
@NgModule({
  providers: [LoggingService],
})
```


Provide the own separate instance of the service to the component in a eager loaded module
core.module.ts
```ts
@NgModule({ 
  providers: [LoggingService],
})
```


When you're importing your SharedModule into a lazy loaded module, the services provided in the SharedModule will be recreated for the lazy loaded module, you might have a behavior you don't want. 
therefore, the rule of thumb is that you provide services through '@Injectable' or in the AppModule.
