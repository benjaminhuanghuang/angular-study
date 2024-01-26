
```ts
@NgModule({
  imports: [BrowserModule],
  providers: [UserService]
})
```

Angular will convert this to:
```ts
 providers: [{provider: UserService, useClass: UserService}]
```   

The provider stores a unique identifier, value of provider can be
- A type
- A string
- instance of injection token



## String token
```ts
 providers: [{provider: 'USER_SERVICE', useClass: UserService}]
```   

Inject the service into the component
```ts
 constructor(@Inject('USER_SERVICE') private usersService: UsersService) {
 }
```

## Injection token
```ts
export const USER_SERVICE_TOKEN = new InjectionToken<UserService>('USER_SERVICE');

providers: [{provider: USER_SERVICE_TOKEN, useClass: UserService}]
```
Inject the service into the component
```ts
 constructor(@Inject(USER_SERVICE_TOKEN) private usersService: UsersService) {
 }
```


### Injection token sample in PBI
/src/Modern/Shared/FormulaBar/injection-tokens.ts
```
export const IntellisenseModelServiceInjectionToken = new InjectionToken<IIntellisenseModelService>('IntellisenseModelService');
```

src\Modern\Shared\FormulaBar\dataModel\formula-bar.model.behavior.service.ts
```
export const FormulaBarModelBehaviorServiceProvider: Provider = {
    provide: BehaviorServiceInjectionToken,
    useClass: FormulaBarModelBehaviorService,
};     
```
