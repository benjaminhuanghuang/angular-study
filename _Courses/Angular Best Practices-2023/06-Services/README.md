## Marking services as injectable

## Angular Injectors and Providing Services
Old way (Angular 5.0):

```ts
import { UserRepositoryService } from "../services/user-repository.service";

@NgModule ({
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, AccountMenuComponent],
  declarations: [NavBarComponent, AccountMenuComponent],
  providers: [UserRepositoryService]        // provide service in the module
})
export class CoreModule { };
```

New way (Angular 6.0):
```ts
@Injectable ({providedIn: 'root'})          // singleton in entire application
export class UserRepositoryService {

}
```



## Using services for data retrieval
