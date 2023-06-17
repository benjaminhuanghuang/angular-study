
Using modules to group related pieces of functionality of application is the ability to load those pieces on demand

Modules that are lazily loaded will only be loaded when the user `navigates to their routes`.



## Eager loading
Eager loading is the `default` loading strategy for components in Angular. 
It loads all the components registered in the app module for the first time. Once all the components are loaded, they will be rendered on the page.

## Lazy Loading
It only loads components that are required to render the page.

It renders the page faster than eager loading .

It improves the user experience.



## Preloading Strategy
But what if the route still has many components to be loaded? 
The preloading strategy now comes into the picture to solve the slow rendering issue

The preloading strategy loads the first route components to render the page as quickly as possible. After the first route, it loads the other module in the back process. The other module will be ready to use, and the user won't have to wait for all the components to load.

To implement the preloading strategy, add a parameter to RouterModule.forRoot() in AppRoutingModule.
```
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
```
without clicking on the link, that FirstModule loaded after the main.js
