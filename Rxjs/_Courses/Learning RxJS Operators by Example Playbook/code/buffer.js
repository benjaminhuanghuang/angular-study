/*
 buffer
 add values into a buffer then emit buffered values as array whenever inner observable emits
*/

const { interval } = require("rxjs");
const { buffer, take } = require("rxjs/operators");

console.log("# emit the buffer after 1000 ms");
interval(100) // emit values every 100 ms
  .pipe(buffer(interval(1000))) // buffer values for 1000 ms, shut down current batch and start a new batch
  .subscribe((d) => {
    console.log(d);
  });
// Output:
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]
// [ 9, 10, 11, 12, 13, 14, 15, 16, 17 ]
// [ 18, 19, 20, 21, 22, 23, 24, 25, 26 ]
