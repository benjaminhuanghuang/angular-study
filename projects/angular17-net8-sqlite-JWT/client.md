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

ng g c components/navbar

ng g s services/auth
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
