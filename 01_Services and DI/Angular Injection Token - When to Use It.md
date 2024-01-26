# Angular Injection Token - When to Use It?
https://www.youtube.com/watch?v=GvA7xnBmEto


Sample
```
export interface UserServiceConfigInterface {
  apiUrl: string;
}

@NgModule({
  providers: [
    { provide: 'USER_SERVICE_CONFIG', useClass: UsersService},
    { provide: 'USER_SERVICE_CONFIG', useValue: {apiUrl: 'http://localhost:3000/users'}},
  ]
})


export class AppComponent {
  constructor(
    @Inject('USERS_SERVICE') private usersService: UsersService,
    @Inject('USERS_SERVICE_CONFIG') private config: UsersServiceConfigureInterface,
  ) {
    console. log('usersService', usersService, config);
  }
}
```

Using the token
```
export interface UserServiceConfigInterface {
  apiUrl: string;
}

export const USERS_SERVICE_TOKEN = new InjectionToken<UsersService>('');
export const USERS_SERVICE_CONFIG_TOKEN = new InjectionToken<UsersServiceConfigInterface>('');

@NgModule({
  providers: [
    { provide: USERS_SERVICE_TOKEN, useClass: UsersService},
    { provide: USERS_SERVICE_CONFIG_TOKEN, useValue: {apiUrl: 'http://localhost:3000/users'}},
  ]
})


export class AppComponent {
  constructor(
    @Inject(USERS_SERVICE_TOKEN) private usersService: UsersService,
    @Inject(USERS_SERVICE_CONFIG_TOKEN) private config: UsersServiceConfigureInterface,
  ) {
    console. log('usersService', usersService, config);
  }
}
```


