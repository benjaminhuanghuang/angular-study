/*
scan is used to transform an Observable by applying a function to each value in the stream, 
and returning an Observable that emits the cumulative result. It is similar to the reduce 
*/

import { scan } from 'rxjs/operators';

fromEvent(document, 'click').pipe(scan(count => count + 1, 0)).subscribe(data => {
    console.log(data);
});
