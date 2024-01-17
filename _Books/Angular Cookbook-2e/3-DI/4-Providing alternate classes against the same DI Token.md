


The BucketService is provided in 'root', using the providedIn: 'root' syntax. Therefore, it resides at the top of the hierarchy.
We use an aliased class provider in the EmployeeComponent class against the DI token BucketService,
```ts
@Component({
  ...
  providers: [{
    provide: BucketService,
    useClass: EmployeeBucketService,
  }],
})
export class EmployeeComponent {}
```
