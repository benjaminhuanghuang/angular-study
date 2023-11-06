## Test component
- Does the component have the correct state / property.
- Does it render the correct HTML
- Does it handle user events correctly
  


## How to test function and state
- Create component
- Invoke methods to simulate user interaction



## Test @Input, @Output
```
  component.sale.subscribe((sale: Sale) => saleEmitted = sale);
```


## Event
```
  const button = fixture.nativeElement.querySelector('button');
  button?.click();
```



