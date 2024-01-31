
## Why
- Visual Testing
- Synchronous Testing 
- Mocks Observables
- Virtual Time
- Support Jasmine Framework
- Custom Matchers
  


## Setup
```
npm i -d jasmine-marble
```

## Methods
- hot
- cold
- toBeObservable
- toHaveSubscriptions


## Marble Syntax
```
- time frame, 10ms

| completion, empty observable

# error termination the observable

^ subscription

! unsubscription

a value being emitted by the producer

() Emit a single grouped value on same time frame

```


