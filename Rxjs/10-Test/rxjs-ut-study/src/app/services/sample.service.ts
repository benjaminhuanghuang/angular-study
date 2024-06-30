import { Injectable } from '@angular/core';
import { Observable, of, switchMap, take, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor() { }

  getValue(value: boolean): Observable<boolean> {
    return of(value);
  }

  getValues(): Observable<String> {
    return of('Hello', 'Packt', 'Readers');
  }

  getRecurrentValues(): Observable<String> {
    //emit a value every 5 seconds
    return timer(0, 5000).pipe(
      take(3),
      // for every emission, we use the switchMap operator to return an observable that emits three values consecutively.
      switchMap((_) => of('Hello', 'Packt', 'Readers'))
    )
  }
}
