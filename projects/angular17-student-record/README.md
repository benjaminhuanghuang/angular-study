# Angular 17 tutorial with demo application

https://www.youtube.com/watch?v=BBh3wMVJaso&list=PL3EibBwUnE37aZ937p2L2VoozXUKcsI76

https://github.com/deepakjha14/yt-students-details-app

Student record application using ng-bootstrap + ag-grid + Mockoon

## Setup
  
```bash
npm install -g @angular/cli
ng version

ng new student-details
```

Change prefix to "students-details" in angular.json

## Setup ESlint
  
```bash
ng lint    # create .eslintrc.json
```

## ng-bootstrap

```bash
ng add @ng-bootstrap/ng-bootstrap
```

import bootstrap css in styles.css

## ag-grid

```bash
npm install ag-grid-angular                
```

import  css in styles.css

## Auth
  
```bash
  ng g c auth/login
```

Auth Guard

```bash
ng g guard auth/auth-guard

() canMatch
```

## Lazy loading

```bash
ng g module dashboard
ng g c dashboard/dashboard

```

app-routs.ts

```ts
{
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canMatch: [authGuardGuard]
  }
```
