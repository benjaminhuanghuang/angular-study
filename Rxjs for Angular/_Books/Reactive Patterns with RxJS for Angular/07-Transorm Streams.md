# Chapter 7: Transforming Streams
Create 
src/app/core/model/tags.ts

Create recipe-creation component

Add route in app-routing.module.ts
```ts
 { path: 'recipes/create', component: RecipeCreationComponent },
```

## Save
Reactive forms leverage RxJS by using the valueChanges observable to track the FormControl changes

Since observables are lazy, we should subscribe to it in order to initiate the HTTP POST request
```ts
ngOnInit(): void {
    this.recipeForm.valueChanges.subscribe(
       formValue => {
          // Should subscribe to the observable to call the api
          this.service.saveRecipe(formValue).subscribe(
               result => this.saveSuccess(result),
               errors => this.handleErrors(errors)
           );
       }        
    );
```
This implementation is problematic for several reasons:
- Every time we use subscribe(), we open the door to imperative code
- Nested subscriptions should be cleaned carefully to avoid memory leaks
- We open up the possibility of serious timing issues. In fact, if multiple form values are emitted by valueChanges successively, many save requests will be sent in parallel.


## reactive pattern for autosave using Higher-order observables
The saveRecipe$ observable in the service is responsible for saving the data in the backend. It will initiate the http request when subscribed to.

A higher-order observable is just an observable like any other, but its values are observables as well. it emits observables that you can subscribe to separately

In our case, for every emitted form value from the valueChanges$ observable, we want to emit the saveRecipe$ observable. In other words, we want to transform or map the form value to the saveRecipe$ observable. 

```ts
 valueChanges$ = this.recipeForm.valueChanges.pipe(
    concatMap(formValue =>this.service.saveRecipe(formValue)),
    catchError(errors => of(errors)),
    tap(result=>this.saveSuccess(result))
  );
```

## operators
- concatMap
- mergeMap
- switchMap
- exhaustMap
