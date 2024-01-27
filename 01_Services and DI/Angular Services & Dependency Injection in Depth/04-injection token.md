# Angular Injection Token

```ts
providers: [
    { provide: UserService, useValue: UserService }
]
```

The unique identifier can be a type, string or injection token.

Using a string as the unique identifier
String identifier is not recommended because it is not safe. If you use a string as the unique identifier, you can not detect the error at compile time.

```ts
@NgModule({
  providers: [
    { provide: 'USER_SERVICE', useValue: UserService }
  ]
})
```

```ts
@Component ( {
})
export class UserListComponent {
  constructor (@Inject('USER_SERVICE') private userService: UserService) {
  
  }
}
```

Using the injection token as the unique identifier

```ts
export const USER_SERVICE = new InjectionToken<UserService>('USER_SERVICE');


@NgModule({
  providers: [
    { provide: USER_SERVICE, useValue: UserService }
  ]
})


@Component ( {
})
export class UserListComponent {
  constructor (@Inject(USER_SERVICE) private userService: UserService) {
  
  }
}
```
