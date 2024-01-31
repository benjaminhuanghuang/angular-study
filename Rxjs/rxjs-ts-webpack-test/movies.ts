import { Observable, fromEvent, mergeMap, interval } from "rxjs";
import { map, filter, delay } from 'rxjs/operators';

interface Movie {
    title: string;
}

const output = document.getElementById("output") as HTMLElement;
const button = document.getElementById("button") as HTMLElement;

const click$: Observable<Event> = fromEvent<Event>(button, "click");

function load(url: string) {
    return new Observable(observer => {
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
    });
}

function loadWithFetch(url: string) {
    return Observable.defer(() => {
        return Observable.fromPromise(
            fetch(url).then(r => r.json())
        ));
});    
}

function retryStrategy({ attempts = 4, delay = 1000 }) {
    return function (errors) {
        return errors
            .scan((acc, value) => {
                console.log(acc, value);
                return acc + 1;
            }, 0)
            .takeWhile(acc => acc < attempts)
            .delay(delay);
    }
}

function renderMovies(movies: Movie[]) {
    movies.forEach(m => {
        let div = document.createElement("div");
        div.innerText = m.title;
        output.appendChild(div);
    });
}

loadWithFetch("movies.json").subscribe(renderMovies);

// click$.flatMap(e => loadWithFetch("movies.json"))
//     .subscribe(
//         renderMovies,
//         e => console.log(`error: ${e}`),
//         () => console.log("complete")
//     );


click$.pipe(
    mergeMap((e: MouseEvent) => {
        return load("movies.json");
    })
).subscribe(renderMovies);

