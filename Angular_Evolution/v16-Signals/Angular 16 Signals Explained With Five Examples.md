# Angular 16 Signals Explained With Five Examples
https://medium.com/@KkambizZ/angular-16-signals-explained-with-five-examples-6b773a12c974

## Example 1: Using Signals to update a total price
Whenever an item is removed from the cart, we update the itemList signal which triggers the recalculation of totalPrice.

```
Total Price: ${{totalPrice()}}
```

```
export class CartComponent {
  items = [    { name: 'Product A', price: 10 },    { name: 'Product B', price: 15 },    { name: 'Product C', price: 20 },  ];
  
  // Define a signal for the list of items
  itemList = signal(this.items);
  
  // Define a computed value for the total price
  totalPrice = computed(() => {
    return this.itemList().reduce((acc, curr) => acc + curr.price, 0);
  });
  
  removeItem(item) {
    // Update the itemList signal by removing the selected item
    this.itemList.set(this.itemList().filter((i) => i !== item));
  }
}
```

## Example 2: Using Signals to show/hide a loading spinner
```
export class TableComponent {
  // Define a signal for the loading state
  loading = signal(true);
  
  ngOnInit() {
    // Fetch the data from the API
    fetchData().subscribe((data) => {
      // Update the loading signal to hide the spinner
      this.loading.set(false);
      
      // Render the data in the table
      ...
    });
  }
  
  isLoading() {
    return this.loading();
  }
}
```

## Example 3: Using Signals for reactive programming in applications
```
import { signal, computed, effect } from 'signal';

// Writable signals
const firstName = signal('John');
const lastName = signal('Doe');
const age = signal(30);

// Computed signal to calculate the full name
const fullName = computed(() => `${firstName()} ${lastName()}`);

// Computed signal to determine if the person is an adult
const isAdult = computed(() => age() >= 18);

// Effect to log the full name and adult status whenever any of the signals change
effect(() => {
  console.log(`Full Name: ${fullName()}`);
  console.log(`Is Adult: ${isAdult()}`);
});

// Update the values of the writable signals
firstName.set('Jane');
lastName.set('Smith');
age.set(25);
```

## Example 4: Using Signals for filtering, sorting, and counting data based on various conditions
