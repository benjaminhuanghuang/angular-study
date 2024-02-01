import { Observable, fromEvent } from "rxjs";
import { map, filter, delay } from 'rxjs/operators';

interface Movie {
    title: string;
}

const output = document.getElementById("output") as HTMLElement;
const button = document.getElementById("button") as HTMLElement;

const click$: Observable<Event> = fromEvent<Event>(button, "click");

click$.subscribe((e: Event) => {
    load('movies.json')
})


function load(url: string) {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
            let movies = JSON.parse(xhr.responseText);
            movies.forEach((movie: Movie) => {
                let div = document.createElement("div");
                div.innerHTML = movie.title;
                output.appendChild(div);
            });
        }
    });

    xhr.open("GET", url);
    xhr.send();
}