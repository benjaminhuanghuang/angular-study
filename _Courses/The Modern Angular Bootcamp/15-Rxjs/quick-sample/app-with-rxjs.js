const { fromEvent } = rxjs;
const { map } = rxjs.operators;

const input = document.querySelector("input");
const observable = fromEvent(input, "input").pipe(
  map((event) => event.target.value),
  map((value) => parseInt(value)),
  map((value) => {
    if (isNaN(value)) {
      throw new Error("Enter a number!");
    }
    return value;
  })
);

observable.subscribe({
  next(value) {
    console.log(`Your value is ${value}`);
  },
  error(err) {
    console.error("BAD THING HAPPEN!!", err.message);
  },
});
