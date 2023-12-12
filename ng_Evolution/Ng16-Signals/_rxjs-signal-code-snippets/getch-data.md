```ts
  // Retrieve the users from the API using RxJS
  users$ = this.http.get<User[]>(this.userUrl);
```
