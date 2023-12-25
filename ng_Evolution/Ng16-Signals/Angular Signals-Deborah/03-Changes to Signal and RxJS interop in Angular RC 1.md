# Changes to Signal and RxJS interop in Angular RC 1
https://www.youtube.com/watch?v=xQIOWkBe5wQ&list=PLErOmyzRKOCr07Kcnx75Aqh6PWSbIokPB&index=3


change signal to computed to handle the error
```ts
vehicles = this.vehicleService.vehicles;
```
to
```ts
vehicles = computed(() => {
  try {
    return this.vehicleService.vehicles();
  } catch (error) {
    this.errorMessage = typeof error === 'string' ? e : 'Error';
    return [];
  }
```
