## What is service
Central place to manage data




## Hierarchical Injector
- AppModule: Same instance of service is available application wide.
- AppComponent: Same instance of service is available for all components (but not for other services)
- Any other component: Same instance of service is available for the component and all its child components
