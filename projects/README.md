# Angular Development with TypeScript 2ed

https://github.com/Farata/angulartypescript

## Create project

```
  ng new ngAuction --prefix nga --routing

  --prefix nga: 在 angular.json 中标记, 所有的 selector 都有 nga- prefix
  --routing   : generate a boilerplate module for routing support
```

## Use Bootstrap

Installing Bootstrap, jQuery, and Popper.js

```
  npm i bootstrap jquery popper.js -D
```

Add referene in angular.json

```
 "styles": [
    "src/styles.css",
    "../node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],

  "scripts": [
    "..node_modules/jquery/dist/jquery.min.js",
    "..node_modules/bootstrap/dist/js/bootstrap.min.js"
  ]
```
