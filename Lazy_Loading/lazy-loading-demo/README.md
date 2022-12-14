# Lazy Loading Angular Modules and Preloading Strategies
Mar 24, 2020

https://app.pluralsight.com/guides/lazy-loading-angular-modules-and-preloading-strategies


```
$ ng new lazy-loading-demo


# generate a routing module
$ ng g m first --routing


ng g c /first/components/first --module first
```

configure AppRoutingModule, To make FirstModule part of your application, load it in routes.
```
const routes: Routes = [
  {
    path: "first",
    loadChildren: "./first/first.module#FirstModule"
  }
];
```
There are three parts to configure in the loadChildren field of the route's object.
```
loadChildren: 'path-of-module#module-name'
```


Update!
```
const routes: Routes = [
  {
    path: "first",
    loadChildren: () => import("./first/first.module").then(m => m.FirstModule)
  }
];

configure FirstRoutingModule.
```
const routes: Routes = [
  {
    path: "",
    component: FirstComponent
  }
];
```

Create a link with the path of FirstComponent to show the first module to be loaded.
```
<a [routerLink]="['/first']">First</a> <router-outlet></router-outlet>
```

the application loaded main.js with all the components of an application.
Click on the link that you created to see the first_first_module_FirstModule.js to be loaded.


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
