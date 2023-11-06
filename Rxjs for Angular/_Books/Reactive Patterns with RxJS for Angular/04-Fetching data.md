
# Chapter 4: Fetching Data as Streams

Start the backend:
```
  npm  run  server-start
```
The server will be running at http://localhost:3001

## classic Pattern
- Define the Data Structure / Model
```
  cd src/app/core/model
  ng g i Recipe
```
- Create the service and implement the GET method
```
  cd src/app/core/services
  ng g s Recipe
```

```ts
  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${BASE_PATH}/recipes`);
  }
```
- Inject the service to component. Call the method in the ngOninit(). Subscribe to the Observable
```ts
  recipes!: Recipe[];
  
  ngOnInit(): void {
    this.service.getRecipes().subscribe(result => {
      this.recipes = result;
    });
  }
```
- Bind to a property and call it in the template
```html
  <p-dataView #dv [value]="recipes" [paginator]="true"
```
- Manage Unsubscription
There are two ways to unsubscribe:
1. Unsubscribe manually in ngOnDestroy (not recommended)
```ts
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
```

1. Using the takeUntil operator
The takeUntil() operator takes values from this.service.getRecipes() until the this.destroy$ emit a value
```ts
destroy$ = new Subject<void>();

ngOnInit(): void {
    this.service.getRecipes().pipe(
      takeUntil(this.destroy$)
    ).subscribe(result => {
      this.recipes = result;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
```

## reactive pattern for fetching data
The idea behind this reactive pattern is to keep and use the observable as a stream throughout the application.

Define a observable/stream variable in the service
```ts
  recipes$ = this.http.get<Recipe[]>(`${BASE_PATH}/recipes`);
```

Define the stream in the component
```ts
  recipes$ = this.service.recipes$;
```

Using the async pipe in your template
```html
  <div *ngIf="recipes$ |async as recipes" class="card">
    <p-dataView #dv [value]="recipes" [paginator]="true"
```

But try to ask yourself, do I really need to subscribe here? Can I instead compose multiple streams together, or use RxJS operators, to achieve what I need without subscribing? Aside from cases where it is unavoidable, never use subscribe().

## Using the change detection strategy of OnPush
Change detection is one of the powerful features of Angular.
It is about detecting when the component's data changes and then automatically re-rendering the view or updating the DOM to reflect that change. 
The default strategy of "check always" means that, whenever any data is mutated or changed, Angular will run the change detector to update the DOM. 
So, it is automatic until explicitly deactivated.

In the OnPush strategy, Angular will only run the change detector when the following occurs:
- Condition 1: A component's @Input property reference changes (bear in mind that when the input property object is mutated directly then the reference of the object will not change and consequently the change detector will not run. In this case we should return a new reference of the property object to trigger the change detection).
- Condition 2: A component event handler is emitted or gets triggered.
- Condition 3: A bound observable via the async pipe emits a new value.
