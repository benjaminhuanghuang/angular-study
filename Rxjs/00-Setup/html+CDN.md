# Import library from CDN

```html
<script src="https://unpkg.com/rxjs@7.8.1/dist/bundles/rxjs.umd.min.js"></script>
    
```
## Method1: Use rxjs object
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>RxJS Practice</title>
    </head>
    <body>
    <script src="https://unpkg.com/rxjs@7.8.1/dist/bundles/rxjs.umd.min.js"></script>
    <script>
        rxjs.fromEvent(document, 'click')
        .pipe(
            rxjs.operators.map(
            event =› ({ x: event.×, y: event.y }))
        )
        .subscribe(position => {
            console.log(position)
        });
    </script>
    </body>
</html>
```

## Method 2 Use separate js file and Destructuring Assignment

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>RxJS Practice</title>
    </head>
    <body>
    <script src="https://unpkg.com/rxjs@7.8.1/dist/bundles/rxjs.umd.min.js"></script>
    <script src="example.js"></script>
    </body>
</html>
```

```js
const { fromEvent } = rxjs;
const { map } = rxjs.operators;

```
