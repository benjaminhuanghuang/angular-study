
/*
Event is hot observable
  subscriptions receive same value at same time
  All subscriptions share the same source
*/
import { Observable, fromEvent } from 'rxjs';

const button = document.querySelector('button#hello');

const click$ = new Observable<MouseEvent>(subscriber => {
    const eventHandler = (event: any) => {
        console.log('event callback executed');
        subscriber.next(event as MouseEvent);
    }


    button?.addEventListener('click', eventHandler);

    return () => {
        // prevent memory leaks
        button?.removeEventListener('click', eventHandler);
    }
});


click$.subscribe((event: MouseEvent) => console.log('Sub 1 ', event.type, event.x, event.y));
setTimeout(() => {
    click$.subscribe((event: MouseEvent) => console.log('Sub 1 ', event.type, event.x, event.y));
}, 5000);


// Use fromEvent
const click2$ = fromEvent<MouseEvent>(button as HTMLElement, 'click');
click2$.subscribe((event: MouseEvent) => console.log('Sub 1 ', event.type, event.x, event.y));