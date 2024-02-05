# Angular Internals: How Reactivity Works with Zone.js
https://dev.to/this-is-angular/angular-internals-how-reactivity-works-with-zonejs-302m


Reactivity: When you change a bit of code here, it updates a bit of code there automatically.

React uses explicit update calls (setX) to track when the state changes
```ts
const App = () => {
    const [count, setCount] = useState(0);

    const addOne = () => setCount(count+1);

    return <button onClick={addOne}>{count}</button>;
}
```

Vue uses a proxy and a special property name (.value) to seemingly magically track state.
```html
<template>
    <button @click="addOne()">{{count}}</button>
</template>

<script setup>
import {ref} from 'vue';

const count = ref(0);

function addOne() {
    count.value += 1;
}
</script>
```

Angular just mutates the count variable, and the framework count the state changes.
```ts
@Component({
  selector: 'my-app',
  template: `
    <button (click)="addOne()">{{count}}</button>
  `,
})
export class AppComponent {
  count = 0;
  addOne() {
    this.count++;
  }
}
```

## What mechanism is being used to tell the template to re-render?
Angular uses something called "Zone.js" to track all asynchronous APIs via a series of polyfills, and uses those Zones to re-render "dirty" content in Angular's tree.

## How Angular's template compiler works


## Exactly how is the template compiler run by Angular?


## What about when the component updates?

## Zone.js
The very basic idea behind Zone.js is that you're able to create a "context" to run your code inside. This "context" can then be used to keep track of what's currently running, run custom error handling code, and more.
