import { of, fromEvent, from, Observable } from 'rxjs';
import { map, scan } from 'rxjs/operators';

of(1, 2, 3,4)
    .pipe(
        map((x:number) => x * x)
    ).subscribe((data:number) => {
        console.log(data);
    })