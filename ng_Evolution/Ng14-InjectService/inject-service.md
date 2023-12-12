```ts
import { inject } from '@angular/core';

@Component ({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  // Inject the UserService (new in v14)
  userService = inject(UserService);

}
```
