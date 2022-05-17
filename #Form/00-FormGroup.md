
FormGroups providing a wrapper interface around a collection of
FormControls.

This is a really handy way to get the full set of values from our
form without having to iterate over each FormControl individually.
```
let personInfo = new FormGroup({
  firstName: new FormControl("Nate"),
  lastName: new FormControl("Murray"),
  zip: new FormControl("90210")
})
```


