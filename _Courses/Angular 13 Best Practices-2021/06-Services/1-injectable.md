## Method 1
```ts
@Injectable()
export class CatalogRepositoryService {
  constructor (private userRepository:UserRepositoryService) {}
}
```

## Method 2 (not recommended)
```ts
export class CatalogRepositoryService {
  constructor (@Inject(UserRepositoryService) private userRepository:UserRepositoryService) {

  }
}
```
