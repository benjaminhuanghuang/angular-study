# Dependency injection

Dependency injection is a system that supplies instances of a dependency at the time your own class is instantiated

## @Injectable

Angular services often implement the @Injectable class decorator. This decorator
adds metadata that Angular uses for resolving dependencies

The @Injectable decorator tells Angular that the service itself has its own dependencies that need to be resolved.

Is the @Injectable decorator required for Angular services? No. If your service has
no dependencies of its own, you can get by without marking the service as @Injectable.

app.modules.ts

```
@NgModule({
  declarations: [
  ],
  providers: [ShoppingListService],
})
export class AppModule {}
```

## Injection

```
  @Component({
    providers: [TheService]
  })

  /*
   Angular dependency injection uses the service constructor to look up and supply dependencies
  */
  constructor(private service: TheService) {

  }


  this.service.DoSomething()
```

## Hierarchical Injector
