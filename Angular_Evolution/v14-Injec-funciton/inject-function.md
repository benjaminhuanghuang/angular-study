# Angular v14 Inject function

Starting in Angular v14, you can inject services directly into your components without having to declare them in the constructor. This is a new feature that makes it easier to access services in your components.

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

## Injection context

Angular's dependency injection system relies on a runtime context called the injection context. We can only use dependency injection in code that runs in that injection context.

inject() must be called  from an injection context such as a constructor, or a factory function, a field initializer, or a function used with 
runInInjectionContext().
