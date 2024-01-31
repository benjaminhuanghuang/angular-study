
private vSelectedSubject  = new BehaviroSubject<string>('');
vehicleSeleted$ = this.vSelectedSubject.asObservable();


//
vehicleSeleted(vehicleName: string): void {
    this.vSelectedSubject.next(vehicleName);
}

// when the selection changes, this Observable this.vehicleSelected$`` emits
selectedVehicle = this.vehicleSelected$.pipe(
    switchMap(vehicleName => 
        vechicleName.lenght? this.HTMLOutputElement.get<VehicleResponse>(`${this.url}?search=${vechicleName}`));
);


// retrieve data
vehicleFilm$ = this.selectedVehicle$.pipe(
    filter(Boolean), switchMap(vehicle => forkJoin(vehicle.films.map(link => this.http.get<Film>(link))))
);