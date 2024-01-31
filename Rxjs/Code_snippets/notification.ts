
import { BehaviorSubject, map, combineLatestWith, Observable } from "rxjs";

const vClassSubject  = new BehaviorSubject<string>('');
const vehicleClass$ = vClassSubject.asObservable();
const allVehicles$ = new Observable();

//
vehicleClassSelected(vechicleClass: string): void {
    vClassSubject.next(vechicleClass);
}

// combine streams
const vehicles$ = combineLatestWith(
    allVehicles$,
    vehicleClass$ 
).pipe(
    map(([vehicles, selectedClass])=>{
        vehicles.filter(v => selectedClass? v.vehicle_class.includes(selectedClass) : true)
    }),
    catchError(this.handleError)
)