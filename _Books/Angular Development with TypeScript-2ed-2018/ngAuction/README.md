# Angular Development with TypeScript 2ed
By Anton Moiseev, Yakov Fain, 2018, Angular 9


https://learning.oreilly.com/library/view/angular-development-with/9781617295348/
https://github.com/Farata/angulartypescript

## Create project

```
  ng new ngAuction --prefix nga --routing

  --prefix nga: 在 angular.json 中标记, 所有的 selector 都有 nga- prefix
  --routing   : generate a boilerplate module for routing support
```

## Use Bootstrap

Installing Bootstrap, jQuery

```
  npm i bootstrap jquery -D
```

Add referene in angular.json

```
 "styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],

  "scripts": [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]
```

## Create components

```
ng g c home
ng g c carousel
ng g c footer
ng g c navbar
ng g c product-item
ng g c product-detail
ng g c search
ng g c stars
```

## Create services

```
ng g s shared/product

```

## Update the html content

update app.componet.html

update navbar.componet.html

update search.componet.html

update footer.componet.html

update carousel.componet.html
