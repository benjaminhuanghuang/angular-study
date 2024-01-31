## Method 2: Use Parcel
```bash
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
        <script src="./index.ts"></script>
    </body>
</html>
```

Run
```
    parcel index.html
```
