const { Observable } = require("rxjs");

/*
    The function passed in implements the behavior of the observable
*/
const http$ = new Observable((observer) => {
  fetch("api/courses")
    .then((resp) => resp.json())
    .then((body) => {
      observer.next(body);  // emit the value in the observable
      observer.complete();
    })
    .catch((err) => {
      observer.error(err);
    });
});

http$.subscribe(
  (resp) => console.log(resp),
 );
