/*
    pass in callbacks as behavior
*/
class Observalbe{
  constructor(behavior) {
    this.behavior =behavior
  }
 subscribe(callbacks) {
  this.behavior(callbacks);
}
}

//pass in behavior, bechavior will call the callbacks
const obs$ =new Observalbe((callbacks)=>{
  callbacks.next("data");
  callbacks.complete();
});

// process data
const observer = {
  next: (val) => {
    console.log("next", val);
  },
  error: (err) => {
    console.log("error");
  },
  complete: () => {  
    console.log("complete");
  },
}


obs$.subscribe(observer);
