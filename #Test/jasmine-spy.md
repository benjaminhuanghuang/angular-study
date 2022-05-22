
A test double is an object that acts as and is used in place of another object.

a Jasmine test double offers:
- The count of calls on a function
- The ability to specify a return value (stub a return value)
- The ability to pass a call to the underlying function (pass through)


```
var testableObject = {
testableFunction : function() { return 'stub me'; }
};

//before the return value is stubbed
Console.log(testableObject.testableFunction());


//displays 'stub me'
jasmine.spyOn(testableObject,'testableFunction').and.returnValue('stubbed value'); // <-- stub a return value

// After the return value is stubbed
Console.log(testableObject.testableFunction()); // <-- displays 'stubbed value'

console.log(testableObject.testableFunction.count);  // <-- displays the count of calls on a function
```

example of the preceding multiple stubbed values:
```
jasmine.spyOn(testableObject, 'testableFunction').and.returnValue('first stubbed value', 'second stubbed value', 'third stubbed
value');

//After the is stubbed return values
Console.log(testableObject.testableFunction()); // <-- displays 'first stubbed value'
Console.log(testableObject.testableFunction()); // <-- displays 'second stubbed value'
Console.log(testableObject.testableFunction()); // <-- displays 'third stubbed value'
```


## Testing arguments
```
var testableObject = {
testableFunction : function(arg1, arg2) {}
};

//create the spy
jasmine.spyOn(testableObject, 'testableFunction');

//Call the method with specific arguments
testableObject.testableFunction('param1', 'param2');

//Get the arguments for the `first` call of the function
var callArgs = testableObject.testableFunction.call.argsFor(0);
console.log(callArgs);   // <-- displays ['param1', 'param2']
```
