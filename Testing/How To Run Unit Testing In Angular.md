# How To Run Unit Testing In Angular
https://www.infragistics.com/community/blogs/b/infragistics/posts/unit-testing-in-angular

## How To Do Unit Testing in Angular & Test Angular Components
There are several things that a component can do and we must make sure that all of these behaviors are taken into account while writing tests for components:

- They can render templates into the HTML DOM tree.
- They can accept data from parent components using Inputs and emit data using Outputs.
- They can interact to different types of events.
- They can talk to services or stores.
- They can bind data and allow the user to edit it.

## Angular Unit Testing Best Practices


## Set up TestBed
```
beforeEach(async () => {
  Tested. configureTestingModule({
    declarations: [CardComponent],
    imports: [AppModule],
    providers: [DataService]
  }).compileComponents();
  
  fixture = TestBed.createComponent (CardComponent);
  component = fixture. componentInstance;
  fixture. detectChanges ();
});

```
## Testing the DOM
access the DOM tree using DebugElement and its methods query and queryAll
```
const title = fixture.debugElement.query(By.css('h1'));
const cards = fixture.debugElement.queryAll(By.css('.card'));
const cards = fixture.debugElement.queryAll(By.directive(CardComponent));
```


## Triggering event handlers
```
  const submitButton = fixture.debugElement.query(By.css('h1'));
  submitButton.triggerEventHandler('click', null);
```


## Mock Data Using Fake Dependencies
```
export class CardComponent {
  data: Data[] = [];
  constructor (private dataService: DataService) { 

  }
  
  loadItems () {
    const fetchedData = this.dataService.fetchData();
    if (fetchedData. length) {
      this.data = fetchedData;
    }
  }
}
```
we don't want to test what is happening in the fetchData function. What we care about is the response. 
So here we can fake the response using spyOn method and then check if this method was triggered.
```
it('should fetch data and save it in the component', () => {
  const dataService - fixture.debugElement. injector •get (DataService);
  const fetchDataSpy - spyOn (dataService,
  'fetchData') .and .returnValues (mockedData);
  expect (component. data. length). toBe(e) ;
  component. loadItems () ;
  expect (fetchDataSpy) . toHaveBeenCalledTimes (1);
  expect (component. data) . toBe (mockedData);
})
```


## Test Asynchronous Code

If we want to spyOn a method which is asynchronous, we use .resolveTo() instead of .returnValues().
wrap the test in fakeAsync
then we use tick() which simulates the asynchronous passage of time.
```
it("should fetch data async and save it in the component", fakeAsync(() => {
  const dataService = fixture.debugElement.injector.get(DataService);
  const fetchDataSpy = spyOn (dataService, 'fetchDataAsync").and.resolveTo(mockedData);
  
  expect(component.data.length).toBe(6);
  component.loadItemsAsync();
  tick(100);
  
  expect(fetchDataSpy).toHaveBeenCalledTimes(1);
  expect(component.data).toBe(mockedData);
}));
```  

## Test Angular Observables
To test data from Angular Observable and BehaviorSubject which we want to display into the template.
We need to populate the subject with .next and then use tick() to wait some time before processing to the next line.
```
it ('should verify cards are displayed correctly', fakeAsync(() => {
  const dataService = fixture.debugElement.injector.get(DataService);
  dataService.cards$.next (mockedCardData); // populate the subject with .next
  fixture.detectChanges();
  tick(16);
  const cards = fixture.debugElement.queryAll(By.directive(CardComponent));
  expect (cards.length). toBe (2);
}));
```

## Measuring Code Coverage
It is accepted that 80% code coverage is a code goal to aim for.
```
ng test --code-coverage
```

## Angular Unit Testing Best Practices
- Make sure you have set up your Testing Module properly by running `ng test` from the command-line to begin compiling and running Angular Unit tests.
- Name your Unit test in Angular properly – describing the method, the scenario under which the unit is being tested.
- Build your functions `as small as possible` so the unit test can run fast and smoothly.
- Always run unit tests in an isolated environment, eliminating any external dependencies.
- `Use spies` from the Jasmine framework for the dependencies when testing services.
- It is better to access the DOM with `debugElement` (providing an abstraction for the primary runtime environment) instead of calling nativeElement when testing components.
- In case you run your app in the server, use By.css instead of queryselector since the latter only works in the browser.
- Make sure you have at least 80% code coverage.
