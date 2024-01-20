# Angular Signal vs BehaviorSubject
https://www.youtube.com/watch?v=a6XKMj-WRhM&list=PLErOmyzRKOCr07Kcnx75Aqh6PWSbIokPB&index=4


Observable to Signal
```ts
private vehicles$ = this.http.get<VehicleResponse>(this.url).pipe(
  map(response => response.vehicles),
  catchError(error => {
    this.errorMessage = typeof error === 'string' ? error : 'Error';
    return of([]);
  })
);

vehicles = toSignal<Vehicle[], Vehicle[]>(this.vehicles$, {initialValue: []});

```

Signal to Observable
```ts
selectedVehicle = signal<Vehicle | undefined>(undefined);

private vehicleFilms$ = toObservable(this.selectedVehicle).pipe(
    filter (Boolean),
    switchMap(vehicle =>
      forkJoin(vehicle.films.map(link =>this.http.get<Film>(link)))
    )
);

```
