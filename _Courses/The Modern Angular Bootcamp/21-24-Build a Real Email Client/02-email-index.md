## Create inbox module
```
  ng g m Inbox --routing

  ng g c Inbox/Home
```

## Lazy loading
index-routing.module.ts
```ts
  import { HomeComponent } from './home/home.component';

  const routes: Routes = [
    { path: '', component: HomeComponent }    // the path is not 'index'
  ];
```

app-routing.module.ts
```ts
  const routes: Routes = [
    // when user access 'index', load the InboxModule 
    { path: 'inbox', loadChildren: () => import('./inbox/inbox.module').then(m => m.InboxModule) },
  ];
```

## Navigate to 'index' after sign in /sing up
signin.component.ts
```ts
 onSubmit(): void {
    if (this.authForm.invalid) {
      return;
    }

    this.authService.signin(this.authForm.value as SigninCredentials).subscribe({
      next: (response) => {
        // Navigate to some other route
        this.router.navigateByUrl('/inbox');
      }
    });
  }
```

## Guard path, Restriction routing
canActive: can visit the route
canActivateChild: can visit the child route
canLoad: load the lazy module and access the routes inside of it
```
  ng g guard auth/Auth
```
Auth Guard Issues
The signedin$ behavior subject never gets marked as complete:  Use some RxJs trickery to mark the behavior subject as complete

If the guard runs before our 'checkAuth' function is done, we will provide the default 'false' value, marking the user as not authenticated
Change the default value of the behavior subject to 'null'

If we move the 'checkAuth' call to the guard, we risk not running the function+at all if a user only loads another route: Leave the 'checkAuth'
call in the App component

## Create email index components and service
```
  ng g c Inbox/EmailCreate
  ng g c Inbox/EmailReply
  ng g c Inbox/EmailIndex
  ng g c Inbox/EmailShow
  ng g c Inbox/PLaceholder
  ng g c Inbox/NotFound

  ng g s Inbox/Email

  ng g interface Inbox/Email
```


## Child Routing



## Resolver service
```
  ng g s Inbox/EmailResolver
```
Resolve was deprecated in v15.2 and will be removed in v17


## Reusable EmailFormComponent 
```
  ng g c shared/Modal
```
export ModalComponent in shared.module.ts
```ts
  @NgModule({
    declarations: [ModalComponent],
    exports: [ModalComponent]
  })
  export class SharedModule { }
```

import ModalComponent in inbox/inbox.module.ts
```ts
  @NgModule({
    declarations: [
    ],
    imports: [
      SharedModule
    ]
  })
  export class InboxModule { }
```
