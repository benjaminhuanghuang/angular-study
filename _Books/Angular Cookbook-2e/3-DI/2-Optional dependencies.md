use the @Optional decorator to configure optional dependencies in our components and services.

We will work with LoggerService and ensure our components do not break if they have not already been provided with the LoggerService.
```ts
constructor(@Optional() private logger: LoggerService) {
  // 
  this.logs = this.logger?.retrieveLogs() || [];
}
```

Angular will provide the value as null when the dependency doesn’t exist or is not provided to the app.
