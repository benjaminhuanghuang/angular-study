class MyClass {
  myMethod() {
    const foo = 123;
    console.log("1", this);
    setTimeout(function () {
      console.log(this); // Timeout
    }, 0);
  }
}

const myInstance = new MyClass();
myInstance.myMethod();
