# Angular Signals: What? Why? and How?
https://www.youtube.com/watch?v=oqYQG7QMdzw&list=PLErOmyzRKOCr07Kcnx75Aqh6PWSbIokPB

Signals provide a new way for our code to tell our templates (and other code) that our data has changed
This improves Angular's change detection

## What
Signal = value + change notification

```ts
const x = signal(5);
const y = signal(3);
const z = computed(() => X() + У());  

console.log(z()); // 8

x.set (10);
console.log(z()); // 13
```
## Why
Provide more reactivity
Better control over change detection


## How
- Create a signal
- Read a signal
- Set a signal
- Use signal methods
- Define a computed value
- Use an effect for side effects
- Use signal methods


## Where 
- Component
- Directive
- Service
- Template



A signal created with the signal() constructor function is writable
The signal value can be:
> Set to a new value
> Updated based on its current value
> Or its content mutated (for arrays or objects)

 
```
// update value based on the current value
quantity.update(current => current + 1);

// Mutate content in place, not value itself 
// update part of current value 
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
```html
  {{ x()}}
```

## Signal suggestions
- Continue to user event handlers for the user actions
- Use signal or computed for any state/data that could change
- Put shared signals in services.
- Continue to use observables for async options: http.get
