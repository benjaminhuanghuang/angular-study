import { fromEvent, map, debounceTime } from "rxjs";

/*
    The debounceTime operator would wait for the emission to settle down
    Wait for N seconds if there is no emission, it would re-emit the last value

    The error and completion are not delayed and are passed immediately


    in this demo, debounceTime is used to reduce the request sent to server 
    request is sent after stop and wait for 2s 
*/
const sliderInput = document.querySelector('input#slider');


fromEvent(sliderInput as HTMLInputElement, 'input').pipe(
    debounceTime(2000),
    map(event  => {
        const target = event.target as HTMLInputElement;
        return target.value;
    })
).subscribe(value => console.log(value));