

## What to test in Angular Components
There are several things that a component can do and we must make sure that all of these behaviors are taken into account while writing tests for components:

- They can render templates into the HTML DOM tree.
- They can accept data from parent components using Inputs and emit data using Outputs.
- They can interact to different types of events.
- They can talk to services or stores.
- They can bind data and allow the user to edit it.



## Angular Unit Testing Best Practices
- Make sure you have set up your Testing Module properly by running `ng test` from the command-line to begin compiling and running Angular Unit tests.
- Name your Unit test in Angular properly – describing the method, the scenario under which the unit is being tested.
- Build your functions `as small as possible` so the unit test can run fast and smoothly.
- Always run unit tests in an isolated environment, eliminating any external dependencies.
- `Use spies` from the Jasmine framework for the dependencies when testing services.
- It is better to access the DOM with `debugElement` (providing an abstraction for the primary runtime environment) instead of calling nativeElement when testing components.
- In case you run your app in the server, use By.css instead of queryselector since the latter only works in the browser.
- Make sure you have at least 80% code coverage.
