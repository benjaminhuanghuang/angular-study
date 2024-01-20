## Readonly signal
```ts
  readOnlyUsers = toSignal(this.users$, { initialValue: [] as User[] });
```


## Writable signal
```ts
  private userTasks$ = toObservable(this.userService.selectedUserId).pipe(
    switchMap(userId => this.http.get<ToDo[]>(this.todoUrl + userId).pipe(
      tap(tasks => this.userTasks.set(tasks))
    )),
    catchError(() => of([] as ToDo[])) //  on any error, just return an empty array
  );
```

update writable signal
```ts
   markComplete(task: ToDo) {
    this.userTasks.update(tasks => tasks.map(t =>
      t.id === task.id ? { ...t, completed: true } : t));
  }
```
