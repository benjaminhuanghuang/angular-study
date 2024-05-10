# 6 Ways to Create Observables with RxJS

https://medium.com/geekculture/6-ways-to-create-observables-with-rxjs-be93367e3f69

Way 1: Creating from scratch

```typescript
import { Observable } from 'rxjs';

const readBooks = [
    { bookId: 1, title: 'Clean code', auther: 'Robert Cecil Martin' },
    { bookId: 1, title: 'First rate of madness', auther: 'Nassir Ghaemi' },
    { bookId: 2, title: 'The acheivement habits', auther: ' Bernard Roth' },
    { bookId: 3, title: 'Conscious Capitalism', author: 'John Mackey and Rajendra Sisodia'},
    { bookId: 3, title: 'The richest man in Babylon', author: 'George Samuel Clason'},
    { bookId: 3, title: 'Rich dad poor dad', author: 'Robert Kiyosaki and Sharon Lechter'},
];

console.log("Observable from scratch");

// Creating an observable from scratch
function subscribe(subscriber) {
    for (let book of readBooks) {
        subscriber.next(book);
    }
}

let readBooks$ = new Observable(subscribe);
// Consume
readBooks$.subscribe(book => console.log(book.title));
```

Way 2: Creating with ‘create’ static function

```typescript
import { Observable } from 'rxjs';

const toReadBooks = [
    { bookId: 1, title: 'The psychology of money', author: 'Morgan Housel', publicationYear: 2020 },
    { bookId: 2, title: 'The subtle art of not giving a f*ck', author: 'Mark Manson', publicationYear: 2016 },
    { bookId: 3, title: 'How to talk to anyone', author: 'Leil Lowndes', publicationYear: 1999 },
    { bookId: 3, title: 'Invent and wander', author: 'Jeff Bezos', publicationYear: 2020 },
];
    
let readBooks$ = Observable.create((subscriber) => {
      for (let book of toReadBooks) {
          // deliver current book
          subscriber.next(book);
      }
  });

readBooks$.subscribe(book => console.log(book.title));
```

Way 3: Creating from other structures with built-in RxJS functions

This way is often used in projects because we usually get data from a promise or another observable (HTTP call) or from data we already have.

```typescript
import { Observable } from 'rxjs';

const toReadBooks = [
    { bookId: 1, title: 'The psychology of money', author: 'Morgan Housel', publicationYear: 2020 },
    { bookId: 2, title: 'The subtle art of not giving a f*ck', author: 'Mark Manson', publicationYear: 2016 },
    { bookId: 3, title: 'How to talk to anyone', author: 'Leil Lowndes', publicationYear: 1999 },
    { bookId: 3, title: 'Invent and wander', author: 'Jeff Bezos', publicationYear: 2020 },
];

// Pass a bunch of individual values
let source1$ = of('hello', 10, true, readBooks[0].title);
source1$.subscribe(value => console.log(value));

// Pass a single object that already encapsulates a group of values
let source2$ = from(toReadBooks);
source2$.subscribe(book => console.log(book.title));
```

Way 4: Creating observable from combined observables

```ts
import { Observable } from 'rxjs';

const toReadBooks = [
    { bookId: 1, title: 'The psychology of money', author: 'Morgan Housel', publicationYear: 2020 },
    { bookId: 2, title: 'The subtle art of not giving a f*ck', author: 'Mark Manson', publicationYear: 2016 },
    { bookId: 3, title: 'How to talk to anyone', author: 'Leil Lowndes', publicationYear: 1999 },
    { bookId: 3, title: 'Invent and wander', author: 'Jeff Bezos', publicationYear: 2020 },
];

let source1$ = of('hello', 10, true, readBooks[0].title);
source1$.subscribe(value => console.log(value));

let source2$ = from(toReadBooks);
source2$.subscribe(book => console.log(book.title));

// combine the 2 sources
concat(source1$, source2$).subscribe(value => console.log(value));

```

Way 5: Creating observables from Events
subscribing to the click event by using RxJS fromEvent built-in function

```ts

let button = document.getElementById('books');

// The subscribe will only be executed when click event is triggered
fromEvent(button, 'click')
  .subscribe(event => {
    console.log(event);
    let booksDiv = document.getElementById('booksToRead');
    for (let book of toReadBooks) {
      booksDiv.innerHTML += book.title + " by " + book.author + '<br>';
    }
  });
```

Way 6: Observable from AJAX call

```ts
import { ajax } from 'rxjs/ajax';
import { fromEvent } from 'rxjs';

let button = document.getElementById('data');

fromEvent(button, 'click')
  .subscribe(event => {
    ajax('https://reqres.in/api/users?page=2')
      .subscribe(ajaxResponse => {
        console.log(ajaxResponse.response);
        let users = ajaxResponse.response.data;

        let displayDiv = document.getElementById('display');
        for (let user of users) {
          displayDiv.innerHTML += user.first_name + " " + user.last_name +  '<br>';
        }

      });
  });
```
