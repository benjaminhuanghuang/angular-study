const { Observable, fromEvent } = rxjs;
const { map, filter, delay } = rxjs.operators;

const circle = document.getElementById("circle");

fromEvent(document, "mousemove")
  .pipe(
    map((e) => {
      return {
        x: e.clientX,
        y: e.clientY,
      };
    }),
    filter((value) => value.x < 500),
    delay(400)
  )
  .subscribe((value) => {
    if (circle != null) {
      circle.style.left = value.x + "px";
      circle.style.top = value.y + "px";
    }
  });
