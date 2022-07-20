```
  // Adds a spy to browserStorage.setItem
  spyOn(browserStorage, "setItem").and.callThrough();

  service.saveProperty({ key: "myProperty", value: "myValue" });

  // Checks the spy to make sure it was called from saveProperty()
  expect(browserStorage.setItem).toHaveBeenCalledWith("myProperty", "myValue");
```
