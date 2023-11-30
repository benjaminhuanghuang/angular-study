Generate a new Angular project named 'typing'

Install Bulma

Make sure Bulma CSS gets included into the project
```css
@import "bulma/css/bulma.css";
```

Generate random sentence using faker.js
```
  npm install faker

  import {lorem} from 'faker';

  const myString = lorem.sentence();
```

Handle user input
```html
  <input type="text" (input)="onInput($event.target.value)" />
```
```ts
  onInput(value: string) {
    console.log(value);
  }
```

Styling character by character
```html
  <span 
    class="compare(randomLetter, enteredText[i])"
    *ngFor="let letter of randomLetters.split(''); let i = index"
    > {{ letter }} </span>
```
```ts
// Calculate the class name for each letter
compare(randomLetter: string, enteredLetter: string) {
  if (!enteredLetter) {
    return 'pending';
  }
  return randomLetter === enteredLetter ? 'correct' : 'incorrect'
}
```
