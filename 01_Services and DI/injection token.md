
Angular 为什么要引入 injection token 的概念

你可以定义和使用一个 InjectionToken 对象来为非类的依赖选择一个提供者令牌。


```
import { InjectionToken } from '@angular/core';

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
```

这里的 APP_CONFIG 只是一个令牌 token，或者说是一个 place holder.

可选的参数 和令牌描述 app.config 指明了此令牌的用途。 接着，用 APP_CONFIG 这个 Injection Token 对象在组件中注册依赖provider。
```
providers: [{ provide: APP_CONFIG, useValue: HERO_DI_CONFIG }]
```
消费者代码里，注入 APP_CONFIG 的令牌，运行时，令牌会被实际的值 HERO_DI_CONFIG 取代。这个 HERO_DI_CONFIG 不是一个 Angular class, 所以只能以 injection token 的方式注册提供者。

现在，借助参数装饰器 @Inject()，你可以把这个配置对象注入到构造函数中。
```
constructor(@Inject(APP_CONFIG) config: AppConfig) {
  this.title = config.title;
}
```

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