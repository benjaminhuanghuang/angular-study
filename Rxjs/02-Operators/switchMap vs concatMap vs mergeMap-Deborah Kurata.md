# switchMap vs concatMap vs mergeMap ... Oh My!

https://www.youtube.com/watch?v=RSf7DlJXoGQ


## switchMap

Stops the current operation and performs the new operation.
switches to another observable and will cancel pending
requests to start new ones

```ts
citySubject$ = new Subject<string>();

ngOnInit() {
 this.citySubject$.pipe(
   switchMap(city => this.getWeather(city))
 ).subscribe(weather => this.weather = weather);
}

submitCity(city: string) {
 this.citySubject.next(city);
}

getWeather(city: string): Observable<Weather> {
 return this.http.get<Weather>(`/api/weather/${city}`);
}
```




## concatMap

Performs each operation one at a time, in order

## mergeMap
Performs each operation concurrently
