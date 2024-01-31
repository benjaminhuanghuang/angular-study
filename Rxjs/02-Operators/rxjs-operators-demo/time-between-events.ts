import { fromEvent } from 'rxjs';
import { timeInterval, tap } from 'rxjs/operators';

/*
timeInterval convert an Observable that emits items into one that emits indications of the amount of time elapsed between those emissions
*/
fromEvent(document, 'mousedown')
    .pipe(timeInterval(), tap(console.log))
    .subscribe(
        i =>
            (document.body.innerText = `milliseconds since last click: ${i.interval}`)
    );
