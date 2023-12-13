Signal
```ts
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
