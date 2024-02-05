const { Observable, fromEvent } = rxjs;
const { map } = rxjs.operators;

const observable = new Observable((observer) => {
  observer.next("Hello");
  observer.next("World");
  observer.complete();
});
observable.subscribe((val) => print(val));

function print(val) {
  const el = document.createElement("p");
  el.innerText = val;
  document.body.appendChild(el);
}

// Create observable from event
const clicks = fromEvent(document, "click");
clicks.subscribe((x) => print(x));
