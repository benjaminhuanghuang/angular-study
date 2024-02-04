/*
    pass in 3 callbacks
*/
function remind(callbacks) {
  callbacks.next("data");
  callbacks.complete();
}

remind({
  next: (val) => {
    console.log("next", val);
  },
  error: (err) => {
    console.log("error");
  },
  complete: () => {
    console.log("complete");
  },
});
