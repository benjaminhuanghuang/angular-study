```
  // Creates a wrapper for any function that’s supposed to throw an error
  const throws = () => service.saveProperty({ key: "", value: "" });

  // Expects the function to throw an error
  expect(throws).toThrowError();

```
