
app.modules.ts
```
@NgModule({
  declarations: [   
  ],
  providers: [ShoppingListService], 
})
export class AppModule {}
```


Inject
```
  @Component({
    providers: [TheService]
  })


  constructor(private service: TheService) {

  }


  this.service.DoSomething()
```


## Hierarchical Injector

