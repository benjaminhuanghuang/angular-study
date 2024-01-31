// throwIfEmpty
const { of } = require("rxjs");
const { throwIfEmpty } = require("rxjs/operators");

of()
  .pipe(throwIfEmpty())
  .subscribe({
    next: (v) => console.log(v),
    error: (err) => console.log(err.message),
  });
