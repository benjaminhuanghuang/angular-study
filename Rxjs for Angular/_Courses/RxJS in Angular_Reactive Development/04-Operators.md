## map operator internals
```ts

import { Observable } from 'rxjs';

export function map(fn) {
  return (input) =>
    new Observable(observer => {
      return input.subscribe({
        next: value => observer.next(fn(value)),
        error: err => observer.error(err),
        complete: () => observer.complete()
      });
  });
}
```
