/*

Projects each source value to an Observable which is merged in the output Observable, 
in a serialized fashion waiting for each one to complete before merging the next.

*/

import { Observable, concatMap, of, fromEvent, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
const endpointInput = document.querySelector('input#endpoint');

const fetchButton = document.querySelector('button#fetch');

fromEvent(fetchButton as HTMLButtonElement, 'click').pipe(
    map(() => (endpointInput as HTMLInputElement).value),
    concatMap((value) => {
        ajax(`http://random-data-api.com/api/${value}/random_${value}`)
    })

).subscribe((value) => console.log(value));