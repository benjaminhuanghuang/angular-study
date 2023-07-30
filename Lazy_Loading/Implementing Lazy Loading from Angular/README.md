# Implementing Lazy Loading from Angular
https://dev.to/mana95/how-to-implement-lazy-loading-in-your-angular-application-4gi1
https://github.com/Mana95/dev-to-angular


## Angular Routing
Angular routing is a mechanism that allows you to navigate between different views and components in your Angular application. 
It helps you build single-page applications (SPAs)by dynamically changing the content displayed on the page without reloading the entire page. 
Instead of traditional server-side routing, where the server handles navigation and page loads, Angular routing handles navigation on the client-side.


## Angular Lazy loading
Angular application only load the essential components and modules needed for the initial view. 
Other part of component are loading if user navigate to through the application.
Angular Lazy loading is technique that allow user to defer loading of certain modules of an angular application.
These modules are loaded dynamically when a user navigate to a route associated with that module, It will reduce the initial load time as well.


## How to
Create feature modules that encapsulate specific parts of your application. 
These modules can be loaded independently, and you can specify which modules should be lazy-loaded based on the routes.

Step 1: Configure Routes
In your main app-routing.module.ts, configure your routes using the loadChildren property instead of component. 
The loadChildren property takes a string that points to the relative path of the lazy-loaded module.
```
const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'users',
    loadChildren:()=> import('./users/users.module').then(m=> m.UsersModule)
  },
  {
    path:'home',
    component:HomeComponent
  }
];
```

Step 2: Create the Users Modules
Create users module: src/app/users/users.module.ts
Create users component: src/app/users/users.component.ts

create a feature routing module: src/app/users/users-routing.module.ts. 
```
const routes: Routes = [
 {
    path:'',
    component:UsersComponent
  }
];
```
It should be defined in the users.module.ts file under the imports section.
```
imports: [
  CommonModule,
  UsersRoutingModule
]
```

Step 3: Defined Child routing from the users module
```
const routes: Routes = [
  {
    path:'',
    component:UsersComponent
  },
  {
    path:'user-list',
    component:UsersListComponent
  },
  {
    path:'user/:id',
    component:UserDetailComponent
  }
];
```

Step 4: Defined Child routing handling Templates
