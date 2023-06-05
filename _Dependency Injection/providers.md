



```
providers: [UserService]
```
is a sugar of 
```
providers: [{ provide: 'USER_SERVICE', useClass: UsersService}]
``` 

The consumer
```
export class AppComponent {
  constructor(@Inject('USERS_SERVICE') private usersService: UsersService) {
    console. log('usersService', usersService);
  }
}
```