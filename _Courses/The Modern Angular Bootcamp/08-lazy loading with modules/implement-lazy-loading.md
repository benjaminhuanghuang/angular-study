## Implementing Lazy Loading
- Choose which modules should be lazy loaded
- For each of those modules, remove any import statements for those modules from anywhere else in your project
- In the AppRoutingModule, define a Route in the 'routes' array to specify when to load up that module
- In your lazy loaded module's Routing file, edit the 'path' of each route to be relative to the path you specified in the 'AppRoutingModule'
