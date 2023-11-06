```
  // Creates a wrapper for any function that’s supposed to throw an error
  const throws = () => service.saveProperty({ key: "", value: "" });

  // Expects the function to throw an error
  expect(throws).toThrowError();

```

## Async

```
it("should throw an error if the key is missing", fakeAsync(
    inject([PreferencesAsyncService], (service: PreferencesAsyncService) => {
      let result, error;
      service
        .getPropertyAsync("")
        .then((value) => (result = value))
        .catch((err) => (error = err));

      flushMicrotasks();
      expect(result).toBeUndefined();
      expect(error).toEqual("getPropertyAsync requires a property name");
    })
  ));
```
