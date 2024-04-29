# Configuring dependency providers

## Class provider

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), InfoService]
};

// Or
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), {
    provide: InfoService,
    useClass: InfoService
  }]
};
```

## Factory Provider

When we want to create a service instance with some custom logic, we can use a factory provider.

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), {
    provide: InfoService,
    useFactory: () => new InfoService("message")
  }]
};
```

If the InfoService depends on another service, we can inject it into the factory function.
```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), {
    provide: InfoService,
    useFactory: () => {
      const hello = inject(HelloService)
      new InfoService(hello)
    }
  }]
};
```




## Value Provider

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), {
    provide: 'TITLE',
    useValue: 'Info Demo Component'
  }]
};
```

The consumer:
  
```ts
constructor(
  @Inject('TITLE') private title: string
) {
  
}

```
## Existing Provider

```ts

```
