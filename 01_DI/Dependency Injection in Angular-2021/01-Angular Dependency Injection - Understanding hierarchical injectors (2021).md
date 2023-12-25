# Angular Dependency Injection - Understanding hierarchical injectors (2021)
https://www.youtube.com/watch?v=G8zXugcYd7o&list=PLX7eV3JL9sfmJ6AaZj9eDlAKrJrEul4Vz&index=1

## Dependency Injection
"DI is a coding pattern in which a class asks for dependencies from external sources rather than creating them itself"

dependency injection is used to avoid the hard dependencies between classes

Allow you to replace the dependencies without changing the class which i using the dependency

Injector is responsible for creation of a class instance and inject it into constructor of the object
```ts
const userService = new UserService();
return new UserComponent(userService);
```

## Injector demo

## Injectors hierarchy & resolution rules

### Root Injector
Services which were configured in non-lazy @ngModule and in @Injectable annotations
```ts
@Injectable({
  providedIn: 'root'
})
export class UserService {
}
```

```ts
@NgModule({
  imports: [BrowserModule],
  providers: [UserService]
})
```

### Element Injector
Services which were configured in @Component() and in @Direrective() annotations
