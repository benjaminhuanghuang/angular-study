# Client side

## Create project

```bash
ng new client
css
ssr: no

cd client
ng add @angular/material
```

Setup Tailwind CSS: go to tailwindcss.com > Get started > Framework guide > Angular > Install Tailwind CSS 

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

## Create pages, components, service
  
```bash
ng g c pages/login
ng g c pages/home
ng g c pages/register 

ng g c components/navbar
```

## Setup routing

## Navbar

```html
@if(isLoggedIn()){

}@else{

}
```

## Google fonts

Modify tailwind.config.js

```js
 poppins: ["Poppins", "sans-serif"],
```

Modify index.html

```html
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## Login form

## Service

```bash
ng g environments

ng g s services/auth
ng g s services/role

ng g interface interfaces/login-request
ng g interface interfaces/auth-response
```

set the API URL in environment.ts

remember to add  UseCors in API program.cs

## JWT
  
```bash
npm i jwt-decode
```

## Register form

## Account page + interceptor

```bash
ng g c pages/account --skip-tests
```

Add router

```ts
  { path: 'account/:id', component: AccountComponent },
```

```html
  <button [routerLink]="['account',userDetail.id]" mat-menu-item>
```

To get account detail, need to attach the token on the header for the request.

```hash
ng g interceptor interceptors/token
```
