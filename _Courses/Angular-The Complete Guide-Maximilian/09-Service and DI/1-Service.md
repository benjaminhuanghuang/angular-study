## Create service



## Provide service into component tree
Component and all child components will share the same instance of this service
```ts
@Component({
  providers: [LoggingService]
})
export class RecipesComponent {
  constructor(private loggingService: LoggingService) {}
}
```

## Provide service application wide in the app.module.ts
```ts
@NgModule({
  providers: [LoggingService]
})
```
