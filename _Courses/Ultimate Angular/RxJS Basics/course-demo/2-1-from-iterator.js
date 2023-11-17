import { from } from "rxjs";

function * hello() {
    yield 'hello';
    yield 'world';
}

const iterator = hello();

const observer = {
  next: (value) => console.log(value),
};


const source$ = from(iterator);

source$.subscribe(observer);
