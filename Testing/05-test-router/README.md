## 测试什么

You can test code related to the router in two different ways.

- The first is by testing how components receive values from the router or call actions on it.
- The second is by testing the application code invoked by the route guards

- The test will check the calls to the router to make sure the component is creating the dynamic paths correctly.

  from a component’s point of view: A component may need route
  information passed into it, or it may need to tell the router to perform navigation
  actions, from this approach, you’ll use a fake router configuration
  (the components won’t care that it’s fake) and write tests to make sure the components
  work together correctly.

from the router’s point of view: the router configuration itself should be the subject of the test

## 什么时候需要测试

We recommend writing tests only when a `particular route configuration is more complex`, such as when using route guards.

## 测试时的配置

In a test, you only need to configure the router properties that the test

it’s unusual to use your application’s live router configuration
for unit testing.

Your unit tests usually will contain as much route information as
needed to execute a single group of tests.

## Testing router navigation with RouterTestingModule

When you’re testing a component that could cause a navigation event (as you are
here by clicking a link), use RouterTestingModule to keep Angular from loading the
navigation target component. This module intercepts navigation attempts and allows
you to check their parameters.
