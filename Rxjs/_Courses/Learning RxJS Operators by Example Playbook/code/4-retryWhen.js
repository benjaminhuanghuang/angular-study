// retryWhen

const { interval } = require("rxjs");
const { map, retryWhen, scan, takeWhile, tap } = require("rxjs/operators");

let swallowError = false;
interval(200)
  .pipe(
    map((x) => {
      console.log("attempting: " + x);
      if (x === 1) {
        throw "error processing: " + x;
      }
      return x;
    }),
    retryWhen((errors) => {
      if (swallowError) {
        return errors.pipe(
          tap((err) => console.log(err)),
          scan((acc) => acc + 1, 0),
          tap((retryCount) => {
            if (retryCount === 2) {
              console.log("Swallowing error and completing");
            } else {
              console.log("Retrying whole source - retry #" + retryCount);
            }
          }),
          takeWhile((retryCount) => retryCount < 2)
        );
      } else {
        return errors.pipe(
          tap((err) => console.log(err)),
          scan((acc) => acc + 1, 0),
          tap((retryCount) => {
            if (retryCount === 2) {
              console.log("Failing");
              throw "oops";
            } else {
              console.log("Retrying whole source - retry #" + retryCount);
            }
          })
        );
      }
    })
  )
  .subscribe({
    next: (x) => console.log("successfully processed: " + x),
    error: (err) => console.log("*****error: " + err),
    complete: () => console.log("completed successfully"),
  });
