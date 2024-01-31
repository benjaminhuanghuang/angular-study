```js
const { fromEvent, throttleTime } = rxjs;

const button = document.querySelector('button');
const clicks = fromEvent(button, 'click');

/*
*/
const result = clicks.pipe(throttleTime(3000));

result.subscribe(x => console.log(x));   

```
