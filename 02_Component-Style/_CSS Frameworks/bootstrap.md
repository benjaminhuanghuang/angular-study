## Use Bootstrap

Installing Bootstrap
```
  npm i bootstrap
```

## Import Bootstrap in styles.css
```css
@import '~bootstrap/dist/css/bootstrap.min.css';
```

## Import Bootstrap method 2: Add reference in angular.json
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


## container
```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h1>Angular</h1>
    </div>
  </div>
```
