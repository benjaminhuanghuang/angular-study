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

## Guard path
