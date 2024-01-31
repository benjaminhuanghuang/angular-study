# Scenario: Retrieving Related Data when dropdown selection changes

## concatMap: one by one
```ts
todos$ = this.userSelectedAction$ .pipe(
  concatMap(userId =>
  this.http.get<ToDo[]>(${this.url}?userId=${userId} ))
);
```
Emitted values are queued and processed in order sequentially, one at a time.
performs the mapping operation
Wait for it to complete


## mergeMap: concurrently all
```ts
todos$ = this.userSelectedAction$ .pipe(
  mergeMap(userId =>
  this.http.get<ToDo[]>(${this.url}?userId=${userId} ))
);
```

Emitted values are processed immediately
Performs the mapping operation
Emission order is not maintained

NOT best practice for this scenario

## switchMap: stop prior and emit new
```ts
todos$ = this.userSelectedAction$ .pipe(
  switchMap(userId =>
  this.http.get<ToDo[]>(${this.url}?userId=${userId} ))
);
```
Stops processing of prior emitted value
Switches to the new emitted value
Performs the mapping operation
Only the latest emitted value matters

IS best practice for this scenario 
