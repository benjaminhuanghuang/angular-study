

signal to observable
```
  vehicleFilms = fromSignal(this.selectedVehicle);
```


observable to signal
```
import {fromObservable} from '@angular/core/rxjs-interop';

/*
  Automatically subscribe 
  Automatically unsubscribe
  Modifies teh signal when Observable emits
*/
vehicles = formObservable<Vehicle[], Vehicle[]>(this.vehicles$, []);
```
    
Observable to computed
```
pageTitle$ = this.vehicle$.pipe(map(vehicle =› vehicle ? 'Detail for: ${vehicle.name}:''))

pageTitle = computed(() =› this. vehicle()? `Detail for: ${this.vehicle()?.name} :` : '');
```
