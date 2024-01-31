import { Observable } from 'rxjs';


const source$ = new Observable(subscriber => {
    setTimeout(() => {

    }, 3000);
});