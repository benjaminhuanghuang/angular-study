## Method 1. Import library from CDN
```
<!DOCTYPE html>
<html lang="en"›
    <head>
        <meta charset="UTF-8" /›
        <title>RxJS Practice</titles
    </head>
    <body>
    <script src= https://unpkg.com/rxjs@7.1.0/dist/bundles/rxjs.umd.min.js
    </script>
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

## Method 2: Use Parcel
```
    npm i -g parcel-bundler

    mkdir rxjs-practice
    cd rxjs-practice

    npm init
    npm install rxjs
```

index.ts
```
import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

fromEvent<MouseEvent>(document, "click")
  .pipe(map((event: MouseEvent) => ({ x: event.x, y: event.y })))
  .subscribe((position) => {
    console.log(`x: ${position.x}, y: ${position.y}`);
  });

```

index.html
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <title>RxJS Practice</title>
    </head>
    <body>
        <script src="./index.ts"×/script>
    </body>
</html>
```

Run
```
    parcel index.html
```
