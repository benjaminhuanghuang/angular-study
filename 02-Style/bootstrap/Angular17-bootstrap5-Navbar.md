# Angular 17 + Bootstrap 5 + Navbar

## 1. Install bootstrap

```bash
  npm i bootstrap
```

## 2. Import Bootstrap in styles.css

```css
@import 'bootstrap/dist/css/bootstrap.min.css';
```

Import Bootstrap method 2: Add reference in angular.json

```json
 "styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],

  "scripts": [
    "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
  ]
```

## 3. Navbar component

```bash
  ng g c components/navbar
```

Get sample code from https://getbootstrap.com/docs/5.3/components/navbar/

```html
<nav class="">
  <li>
    <a routerLink="/home" routerLinkActive="active" ariaCurrentWhenActive="page">Home</a>
  </li>
</nav>
```


## Reference

How to use Bootstrap 5 navbar in Angular 17?
https://www.youtube.com/watch?v=MauAmAWkqZ0

Navbar Bootstrap 5 | Bootstrap Navbar Tutorial
https://www.youtube.com/watch?v=qNifU_aQRio


https://github.com/admister/Angular-17-website/tree/Video1and2/src/app/components/nav
