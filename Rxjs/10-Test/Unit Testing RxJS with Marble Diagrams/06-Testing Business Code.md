# Testing Business Code and Handling Errors & Race Conditions

## Test Scheduler

RxJS scheduler are the center to control the time for any operator or observables
RxJS has made these schedulers injectable so that you can mock these schedulers and control the time in your test cases.

We call flush on the TestScheduler to start the sequence and run the subscribe callback immediately. 

getTestScheduler
getTestScheduler is providing test scheduler to interval operator that virtualizing the time and making our test synchronous

```ts
it( 'can search user by first name', () => {
  const user: User = { first: 'Rishabh', id: '23'};
  const users = [user];
  const response$ = cold('-----al', { a: users });
  userApi.searchUser = jest.fn(() =› response$);
  component. search('Rishabh');
  getTestScheduler().flush();     // flush the test scheduler
  expect (component.users) . toEqual(users);
});

```

## Race Conditions

A race condition is an undesirable situation that occurs when a device or system attempts to perform two or more
operations at the same time, but because of the nature of the device or system, the operations must be done in the proper
sequence to be done correctly.

```ts
// Testing for RACE Condition
it('can search user in proper sequence', () => {
  userApi.searchUser = jest.fn(() =>
    cold('--------al', { a: [{ first: 'John' }] })
  );
  component. search( 'John');
  
  userApi.searchUser = jest.fn(() =›
    cold('--b|', { b: [{ first: 'Sean' }] })
  ) ;
  component. search( 'Sean');
  
  getTestScheduler() .flush();
  
  expect (component.users).toEqual([{ first: 'Sean' }]);
}) ;
```

The Fix

```ts
 users: User[];
  searchTerm$ = new Subject<string>();   // Subject to emit the search term
  debounce = 500;
  scheduler = asyncScheduler;
  searchUserSubscription: Subscription;

  constructor(private userApi: UserApi) {}

  ngOnInit() {
    this.searchUserSubscription = this.searchTerm$
      .pipe(
        tap(s => console.log('going to debounce for, ', this.debounce)),
        debounceTime(this.debounce, this.scheduler),
        switchMap(first => {              // Use the switchMap operator to cancel the previous search
          console.log('searching via api');
          return this.userApi.searchUser(first);
        })
      )
      .subscribe(s => (this.users = s));
  }

  onKeyUp(first: string) {
    console.log('doing next on searchTerm$');
    this.searchTerm$.next(first);
  }
  ngOnDestroy(): void {
    if (this.searchUserSubscription) {
      this.searchUserSubscription.unsubscribe();
    }
  }
  search(first: string) {
    this.userApi.searchUser(first).subscribe(users => (this.users = users));
  }
```

## Debounce

```ts

it( 'Debounce before searching user by first name', () => {
  component .debounce = 30;
  const response = cold('--al', { a: [{ first: 'Chandra' }] });
  const expected = cold('------b|', { b: [{ first: 'Chandra' }]}) ;
  userApi.searchUser = jest.fn(() =› response);
  const scheduler = getTestScheduler();
  component scheduler = scheduler;
  fixture.detectChanges();
  component.onKeyUp( 'Chandra');
  scheduler.flush();
  expect (component.users).toEqual(expected.values['b']);
}) ;
```

## Error

```ts
cold( marble syntax, mocked-data-map, error ) ;
hot ( marble syntax, mocked-data-map, error );
```

```ts
it( 'should have default error', () => {
  const source$ = throwError('error');
  const expected$ = cold ('#');
  expect(source$) .toBeObservable(expected$);
}) ;


it('should give 2 values and then throw error', () => {
  const source$ = getEmployees();
  const expected$ = cold('(ху#)',
                         { x: 'Roopa',  y: 'Olga' },
                         new Error ('server error')
                        ) ;

  expect(source$) .toBeObservable(expected$);
}) ;

function getEmployees() {
  return new Observable(subscriber => {
    subscriber.next('Roopa');
    subscriber.next('Olga');
    subscriber.error(new Error('server error'));
  });
}
```
