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

What do you have: The post objects
What do you want: The post objects grouped by category
When do you want it: When get data for this page


```ts
postsGroupedByCategory$ = this.postsWithCategory$.pipe (
  concatAll(),
  groupBy (post => post.categoryId, post => post),
  mergeMap (group => zip(of(group.key), group.pipe(toArray()))), // for each group, emits one tuple with the category id and post[]
  toArray ()
) ;
```

## Autocomplete Pipeline

What do you have: We have the list of categories
What do you want: Type: Filter the list of categories based on the user input, Click/Focus: Open the list of categories, Click x: Close the list of categories

```html
<input type="text"
  [(ngModel) ]="selectedCategory"
  (selectItem)="categorySelected($event.item)"
  [ngbTypeahead]="search"
  ...
  (focus)="focus$.next($any($event).target.value)"
  (click)="click$.next($any($event).target.value)"
/>
<button type="button" (click)="onClear()">
  <i class="fa fa-times"></i>
</button>
```

```ts
focus$ = new Subject<string>();
click$ = new Subject<string>();
clear$ = new Subject<string>();

search = (text$: Observable<string >) => {
  const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged ());
  const clickToOpen$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));  
  
  const operations$ = merge(debouncedText$, clickToOpen$, this. focus$, this.clear$);
  return combineLatest([
    operations$,
    this.categories$]).pipe(
    map (([txt, cat]) =>
      txt === '' ? categories : cat. filter (c => new RegExp(*^${txt}, 'i'). test(c.name)))
    );
}
```
