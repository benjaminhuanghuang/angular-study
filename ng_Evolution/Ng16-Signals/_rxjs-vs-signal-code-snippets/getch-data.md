Observable to Signal
```ts
  // Retrieve the users from the API using RxJS
  users$ = this.http.get<User[]>(this.userUrl);
  // Readonly signal
  user = toSignal(this.users$, { initialValue: [] as User[] });
```



Signal to Observable
```ts
  // When the selected user changes, get the user's tasks
  // Observable emit userId changes
  private userTasks$ = toObservable(this.userService.selectedUserId).pipe(
    switchMap(userId => this.http.get<ToDo[]>(this.todoUrl + userId))
  );
  userTasks = toSignal(this.userTasks$, {initialValue: [] as ToDo[]});
```
