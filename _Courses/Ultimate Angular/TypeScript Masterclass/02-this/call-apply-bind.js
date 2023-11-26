// Object literal
const myObj = {
  myMethod() {
    console.log("Object:::", this); // myObj
  },
};

myObj.myMethod();

// Function
function myFunction(text) {
  console.log("Function:::", this, text); // global
}
myFunction(); // global
myFunction.call(myObj, "arg1", "arg2"); // myObj
myFunction.call([]); // []

myFunction.apply(myObj, ["arg1", "arg2"]); // []

const bindFunction = myFunction.bind(myObj);
bindFunction("arg1", "arg2");
