import { asyncScheduler } from "rxjs";

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete!"),
};

/*
asyncScheduler is similar to setTimeout, but it uses requestAnimationFrame under the hood.
*/

asyncScheduler.schedule(console.log, 2000, "Hello World!");

console.log("before");
