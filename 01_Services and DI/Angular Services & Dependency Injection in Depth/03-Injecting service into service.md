# Injecting service into another service

## Injectable decorator

Add @Injectable decorator to the receiver service class.

```ts
@Injectable()
export class UserService {
  constructor(private logger: LoggerService) { }
}
```

Angular recommended to add @Injectable() decorator to all services
