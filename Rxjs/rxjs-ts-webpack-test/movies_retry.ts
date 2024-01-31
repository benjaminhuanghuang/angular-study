import { Observable, fromEvent, interval, of } from "rxjs";
import { map, filter, delay, mergeMap, retry } from 'rxjs/operators';

interface Movie {
    title: string;
}

const output = document.getElementById("output") as HTMLElement;
const button = document.getElementById("button") as HTMLElement;

const click$: Observable<Event> = fromEvent<Event>(button, "click");

function load(url: string): Observable<Movie[]> {
    return new Observable<Movie[]>(observer => {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener("load", () => {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();
            } else {
                observer.error(xhr.statusText);
            }
        });

        xhr.open("GET", url);
        xhr.send();
    }).pipe(retry(4));
}


function renderMovies(movies: Movie[]) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}
click$.pipe(
    mergeMap((e: Event) => {
        return load('movies.json')
    })
).subscribe(renderMovies);


