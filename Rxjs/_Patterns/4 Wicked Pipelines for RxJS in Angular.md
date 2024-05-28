# 4 Wicked Pipelines for RxJS in Angular

https://www.youtube.com/watch?v=wQ8jXlWMoCo&t=41s

- Retrieve Related Data Pipeline
- Lookup Reference Property Pipeline
- Grouping Pipeline
- Autocomplete Pipeline

Tip 1:
- What do you have?
- What do you want?
- When do you want it?

Tip 2:
To response to an action, use a Subject or a BehaviorSubject.

```ts
private userSubject = new Subject<string>();
enteredUser$ = this.userSubject.asObservable();
```

Tip 3:
To work with multiple streams, use a combination operator.

## Retrieve Related Data Pipeline

Scenario: Input user name and return the posts created by that user. input user name -> user object -> posts object
The Post object has a userId property, not a userName property. We have to get the User object first.

We have typed in user name.
We want a list of the posts. Then get the Post object.

```ts
  postsForUser$ = this.enteredUser$.pipe(
    switchMap(userName => this.http.get<User[]>(`${this.usersUrl}?userName=^${userName}$`)),
    switchMap(users => this.http.get<Post[]>(`${this.usersUrl}?userId=^${users[0].id}$`))
  );

  // refactoring
  getUserId(userName: string): Observable<number> {
    return this.http.get<User[]>(`${this.usersUrl}?userName=^${userName}$`).pipe(
      catchError(this.handleError),
      map(users => users[0].id)
    );
  }

  getUserPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.postsUrl}?userId=^${userId}$`).pipe(
      catchError(this.handleError)
    );
  }

  postsForUser$ = this.enteredUser$.pipe(
    switchMap(userName => this.userService.getUserId(userName)),
    switchMap(usersId => this.userService.getUserPosts(usersId))
  );
```

## Lookup Reference Property Pipeline

Scenario: We have the category id in the post object, we want to get the category name.

```ts
 postsWithCategory$ = combineLatest([
    this.allPosts$,
    this.categoryService.allCategories$]). pipe( Array destructuring
    map (([posts, cats]) =› posts. map (post => ({
    ...post,
    category: cats.find(C =› post.categoryId === c.id) ?.name
    }) as Post))
) ;
```

## Grouping

```ts
postsGroupedByCategory$ = this.postsWithCategory$.pipe (
  concatAll(),
  groupBy (post => post.categoryId, post => post),
  mergeMap (group => zip(of(group.key), group.pipe(toArray()))),
  toArray ()
) ;
```
