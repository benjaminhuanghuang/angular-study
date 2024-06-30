# marble testing

There are different packages out there that can help you write marble tests. The most well known are:
- jasmine-marbles
- jest-marbles
- rxjs-marbles.

However, RxJS provides testing utilities out of the box and all the libraries are just wrappers around the RxJS testing utilities. I recommend working with the RxJS utilities for the following reasons:
- You don't have to include a third-party dependency.
- You stay up to date with the core implementation.
- You stay up to date with the latest features.

The API that's provided for testing in RxJS is based on TestScheduler.

```ts
import { TestScheduler } from 'rxjs/testing';
```
