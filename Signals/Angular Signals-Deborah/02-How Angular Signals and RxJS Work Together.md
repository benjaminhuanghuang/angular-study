# How Angular Signals and RxJS Work Together
https://www.youtube.com/watch?v=5SD995zKvbk&list=PLErOmyzRKOCr07Kcnx75Aqh6PWSbIokPB&index=2


## bind a vehicles to UI
```
// vehicle.service.ts
import {fromObservable} from '@angular/core/rxjs-interop';

/*
  Automatically subscribe 
  Automatically unsubscribe
  Modifies teh signal when Observable emits
*/
vehicles = formObservable<Vehicle[], Vehicle[]>(this.vehicles$, []);
```

```
// vehicle.component.ts

vehicles = this.vehicleService.vehicles;
```

```
// template
vehicle()
```

## Render the selected vehicle
The rxjs code in vehicle.service.ts
```
vehicleSelected(vehicleName: string) {
  this.vehicleSelectedSubject$.next(vehicleName);
}

selectedVehicle = combineLatest([this.vehicles$, this.vehicleSelectedSubject$])
  .pipe(
    map(([vehicles, vehicleName]) => {
      return vehicles.find(vehicle => vehicle.name === vehicleName);
    })
  );
```

Using signal in vehicle.service.ts
```
selectedVehicle = signal<Vehicle | undefined>(undefined);

vehicleSelected(vehicleName: string) {
  const foundVehicle = this.vehicles().find(vehicle => vehicle.name === vehicleName);
  this.selectedVehicle.set(foundVehicle);
}
```

```
```

```

```
```

```
```
