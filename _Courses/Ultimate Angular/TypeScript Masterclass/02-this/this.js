// Function
function myFunction() {
  console.log("Function:::", this); // global
}
myFunction();

// Object literal
const myObj = {
  myMethod() {
    console.log("Object:::", this); // myObj
  },
};

myObj.myMethod();

// Class
class MyClass {
  myMethod() {
    console.log("Class:::", this); // myClass
  }
}

const myInstance = new MyClass();
myInstance.myMethod();
