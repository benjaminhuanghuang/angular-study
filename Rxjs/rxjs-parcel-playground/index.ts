import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

fromEvent<MouseEvent>(document, "click")
  .pipe(map((event: MouseEvent) => ({ x: event.x, y: event.y })))
  .subscribe((position) => {
    console.log(`x: ${position.x}, y: ${position.y}`);
  });
