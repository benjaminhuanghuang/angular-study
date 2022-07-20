- Fake
  A test fake is an object you use in a test to substitute for the real
  thing.

- Mock
  A mock is a fake that simulates the real object and keeps track of when it’s called and what arguments it receives.

- Stub
  A stub is a simple fake with no logic, and it always returns the same value.

- Spy
  A spy is a function that invisibly wraps a method and lets you control what values it `returns` or monitor how it was called.

  A test uses a spy to measure if a method was `called`, how many `times` it was called, and with what `arguments`.
