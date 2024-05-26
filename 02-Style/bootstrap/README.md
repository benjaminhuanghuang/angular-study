# Angular + Bootstrap

## Install Bootstrap

```bash
  npm i bootstrap
```

## Import Bootstrap in styles.css

```css
@import 'bootstrap/dist/css/bootstrap.min.css';
```

## Import Bootstrap method 2: Add reference in angular.json

```json
 "styles": [
    "src/styles.css",
    "node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],

  "scripts": [
    "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
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
