const { Observable } = require("rxjs");

const observable = new Observable((observer) => {
  setTimeout(() => {
    observer.next({
      name: "Ben",
    });
  }, 2000);
});

/*
    This observer is an object only have next function
*/
const observer = {
  next: function (value) {
    console.log(value);
  },
};

observable.subscribe(observer);
