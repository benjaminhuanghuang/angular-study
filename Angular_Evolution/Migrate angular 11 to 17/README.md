# Migrate An Angular 11 Project to 17: Step-by-Step Guide

https://www.youtube.com/watch?v=fbCfniJT_JA

- Remove the app modules

First of All, Check Angular Update Guide website

## Upgrade to Angular 12

```bash
ng update @angular/core@12 @angular/cli@12
```

Upgrade Angular CLI
  
```bash
npm uninstall -g @angular/cli

npm install -g @angular/cli@14
```

## Upgrade to Angular 13

```bash
ng update @angular/core@13 @angular/cli@13
```

## Upgrade to Angular 14

```bash
ng update @angular/core@14 @angular/cli@14
```

Angular 14 need ng-bootstrap 13, bootstrap 5.2 and popperjs. Fix the error related to bootstrap

```bash
npm uninstall bootstrap
npm install bootstrap@5.2
npm install @ng-bootstrap/ng-bootstrap@13
npm install popper.js/core

ng update @angular/core@14 @angular/cli@14
```

## Upgrade to Angular 15

Upgrade Angular CLI to 15
  
```bash
npm uninstall -g @angular/cli
npm install -g @angular/cli@15

ng update @angular/core@15 @angular/cli@15
```

## Upgrade to Angular 16

Angular 16 need Node 16 and 18. Upgrade Node to 16
Upgrade Angular CLI to 16
  
```bash
npm uninstall -g @angular/cli
npm install -g @angular/cli@16

ng update @angular/core@16 @angular/cli@16
```

Fix the error related to bootstrap

```bash
npm uninstall bootstrap
npm uninstall @ng-bootstrap/ng-bootstrap

npm install @ng-bootstrap/ng-bootstrap@15 --force
ng update @angular/core@16 @angular/cli@16
```

## Upgrade to Angular 17

Update bootstrap and ng-bootstrap to latest version

```bash
npm uninstall bootstrap --force
npm uninstall @ng-bootstrap/ng-bootstrap --force

npm install bootstrap --force
npm install @ng-bootstrap/ng-bootstrap --force
```

Update Angular CLI to 17

```bash
npm uninstall -g @angular/cli
npm install -g @angular/cli

ng update @angular/core@17 @angular/cli@17
```

Update the control flow to Angular 17 syntax

```bash
ng g @angular/core:control-flow
path: .
reformat: yes
```

Update the components to standalone components

```bash
ng g @angular/core:standalone
type: convert all components
path: .

ng g @angular/core:standalone
type: remove NgModule classes
path: .

ng g @angular/core:standalone
type: using standalone API
```

Rename app-routing.module.ts to app-routing.ts
Remove the NgModule in app-routing.ts
Using the app-routing.ts in the app.config.ts

```ts

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
  ],
};
```
