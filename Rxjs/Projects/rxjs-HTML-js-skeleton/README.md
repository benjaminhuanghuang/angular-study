## Setup

Search "rxjs cdn", import rxjs CDN link into html

```hml
<script src="https://cdnjs.cloudflare.com/ajax/libs/rxjs/7.8.1/rxjs.umd.min.js"></script>
```

Add custom code

```html
  <script scr="app.js"></script>
```

Using RxJS in a project
https://rxjs.dev/guide/importing#cdn
If you installed a library using CDN, the global namespace for rxjs is rxjs.
```js
const { range, filter, map } = rxjs;

range(1, 200)
  .pipe(
    filter((x) => x % 2 === 1),
    map((x) => x + x)
  )
  .subscribe((x) => console.log(x));
```
