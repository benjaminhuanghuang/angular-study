# RxJs from Scratch | Alain Chautard | ng-conf 2022

https://www.youtube.com/watch?v=nQrMgNIvqxM

Observables: provide support for passing messages between publishers
and subscribers in your application. They offer significant benefits for
asynchronous programming and handling multiple values.

Get data from an Observable

- We have to call the subscribe method and pass a callback function as a parameter.
- The callback function will be called every time the observable emits a new value.
- That new value is passed as a parameter to the callback function

```ts
  observable.subscribe((newValue) => {
    console.log(newValue);
  });
```

In the Angular framework, Observables are used by multiple services to get notified:

- Whenever the URL changes in the browser
- When a form input value gets updated
- When a HTTP request completes successfully

## Angular HttpClient

HttpClient is useful in fetching external data, posting data to a server, and more

- It's the Angular service for performing http requests (AJAX)
- It works seamlessly with JSON data and REST
- It returns an Observable object
- HttpClient is a service that can be injected in any constructor

```ts
import (HttpClient) from '@angular/common/http';

@Injectable ()
export class CartService {
  constructor (private http: HttpClient) { }

  getCartContents (): Observable<Car[]> {
    return this.http.get<Car[]>('http://localhost:8000/cart');
  }
}
```

https://stackblitz.com/edit/at-rxjs-demo1


## Operators

- Operators are pure functions that take one or more Observables and return a modified Observable
- Operators are used to transform/filter/concatenate information from one or more sources
- RxJs has over 120 operators available!|
```ts
observable.pipe(
  map(data => data. toUpperCase())
  ).subscribe(newValue => this.currentSelection = newValue);

```

## Two selection operators
```ts
const country$ = http.get<Country>(this.COUNTRY_URL);

//Observable of country data
this.continents = this.continentSelect.valueChanges.pipe(
//Observable of the latest continent selected
withLatestFrom(country$),
// We combine country selection with the latest list of countries
nap(([continent, countries]) => [
// Now we have an array of two values, first the continent, second the countries
continent,
// We return a new array with the continent in first position (untouched)
countries. filter((c) => c.continent == continent), // And a filtered list of countries (by continent) in second position
]),
tap(([continent, filteredCountries]) => { //The data at that point is: 1) selected continent 2) countries of that continent
this.countries = filteredCountries;
//Assign the filtered countries to a component property used by the dropdown
}),
this.countrySelect.setValue(filteredCountries[0].country); // Select the first country by default
map(([continent]) => continent. substring(0, 3). toUpperCase()) // Finally, turn our continent into a 3-letter uppercase string
// We don't subscribe anynore. The async pipe is doing that on our HTML template.|
```

## Create observables

```ts
const observable = new Observable<number>((observer) => {
  observer.next(1);
  observer.next(2);
  observer.complete();
});
```

## Subjects

Subject is a special type of Observable that allows values to be sent to multiple Observers.
Used in service.

```ts
// send data to multiple subscribers
subject.next(data);

// Expose the subject as an observable
subject.asObservable().subscribe((data) => {
  console.log(data);
}); 
```

- Subject Emits next value to current subscribers
- Behavior Subject Emits `latest value` to current and future subscribers, has a default/init value
- ReplaySubject Emits `one-or-more previous values` to future subscribers
- AsyncSubject will only emit the last value upon completion of the Observable
