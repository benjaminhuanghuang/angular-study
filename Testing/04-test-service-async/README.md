## Test Promise

Jasmine needs to know when to end an individual test.
Jasmine will automatically complete a test if you don’t explicitly tell it to wait

The second parameter to a Jasmine `it` block is a function that takes an optional callback parameter, usually called `done`.
If a test supplies this parameter, Jasmine will wait for done to be called before ending the test.

```
// Unit test unexpectedly passes because done callback isn’t defined or called
it('is an asynchronous test', () => {
  setTimeout(() => {
    expect(true).toBe(false);
  });
});

// Unit test fails as expected because it doesn’t complete until the done callback is invoked
it('is an asynchronous test', (done) => {
  setTimeout(() => {
    expect(true).toBe(false);
    done();
  });
});
```

## fakeAsync

If you write tests inside a fakeAsync block, they can pretend to fast-forward asynchronous events by calling tick().

## Sample

```
import { TestBed, inject } from '@angular/core/testing';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService]
    });
  });

  it('should ...', inject(
  [ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});

```

Basic service test spec

```
import { TestBed, inject } from '@angular/core/testing';
import { ContactService } from './contact.service';

describe('ContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService]
    });
  });


  it('should ...', inject([ContactService], (service: ContactService) => {
    expect(service).toBeTruthy();
  }));
});
```
