# Angular Signals: What? Why? and How?
https://www.youtube.com/watch?v=oqYQG7QMdzw&list=PLErOmyzRKOCr07Kcnx75Aqh6PWSbIokPB

We want to react the changes

Signal = value + change notification

```
const x = signal(5);
const y = signal(3);
const z = computed(() =>X() + У ());   // si

console.log(z()); // 8

x.set (10);
console.log(z()); // 13
```

Create a signal
```
quantity = signal<number>(5);
```

Read a signal
```
quantity() // 5
```

Set a signal
```
quantity.set(10);
```

Use signal methods
```
// update value based on the current value
quantity.update(current => current + 1);

// Mutate content in place, not value itself 
selectedVehicle.mutate(v => v.price = v.price + 1);
```
Define a computed 
```
// computed value is readonly
price = computed(() => selectedVehicle().price * quantity());
```

Use an effect for side effects
```
// for debugging, only retrieve the most recent value
qtyEffect = effect(() => console.group("Latest quantity:", this.quantity()))  
```


## How the template updates
Signals are integrated into the existing Angular change detection system

During the template rendering
- Angular Reading a signal returns the signal value
- Also registers the signal as a dependency of the view
- If the signal changes, the view is re-rendered


## Signal suggestions
- Continue to user event handlers for the user actions
- Use signal or computed for any state/data that could change
- Put shared signals in services.
- Continue to use observables for async options: http.get
