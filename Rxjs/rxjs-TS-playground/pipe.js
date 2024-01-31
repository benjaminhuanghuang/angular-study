const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");

const users = {
  data: [
    {
      status: "active",
      age: 10,
    },
    {
      status: "inactive",
      age: 20,
    },
    {
      status: "active",
      age: 30,
    },
  ],
};

const observable = new Observable((subscriber) => {
  subscriber.next(users);
}).pipe(
  map((value) => {
    console.log("1) get data from observable", value);
    return value.data;
  }),
  map((value) => {
    console.log("2) get data from first operator", value);
    return value.filter((user) => user.status === "active");
  }),
  map((value) => {
    console.log("3) get data from second operator", value);
    return value.reduce((sum, user) => sum + user.age, 0) / value.length;
  }),
  map((value) => {
    console.log("3) get data from third operator", value);
    if (value < 30) throw new Error("Average is too young");
    else return value;
  })
);

const observer = {
  next: (value) => {
    console.log("Observer got a value of ", value);
  },
  error: (err) => {
    console.log("Observer got a error of ", err);
  },
  complete: () => {
    console.log("Observer got a complete notification ");
  },
};

observable.subscribe(observer);
