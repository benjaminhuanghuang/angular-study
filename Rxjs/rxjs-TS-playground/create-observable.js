const { Observable } = require("rxjs");
/*

*/
const observable = new Observable((subscriber) => {
  subscriber.next(10);
});

console.log("Nothing happens until we subscribe\n");

const observer = {
  next: (value) => {
    console.log("Observer got a value of ", value);
  },
  error: (err) => {
    console.log("Observer got a error of ", err);
  },
  complete: () => {
    console.log("Observer got a complete notification ");
  },
};

observable.subscribe(observer);

// subscribe by passing next function
observable.subscribe(num => console.log(`Get ${num} from next function`));
