/*
    pass in callbacks as behavior
*/
class Reminder{
  constructor(behavior) {
    this.behavior =behavior
  }
 remind(callbacks) {
  this.behavior(callbacks);
}
}

//pass in behavior, bechavior will call the callbacks
const reminder =new Reminder((callbacks)=>{
  callbacks.next("data");
  callbacks.complete();
});



reminder.remind({
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
