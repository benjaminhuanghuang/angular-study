## Sharing HTTP Responses with the `shareReplay` Operator
In this sample, if beginnerCourses$ and  this.advancedCourses$ are bind to template, there will be 2 different subscriptions to the http$ observable. 
That will cause 2 http requests. 
```ts
    const courses$ = http$.pipe(map(resp => resp["payload"]));
    this.beginnerCourses$ = http$
        .pipe(
            map(courses => courses.filter(course => course.category === 'BEGINNER'))
        );  
    this.advancedCourses$ = http$
        .pipe(
            map(courses => courses.filter(course => course.category === 'ADVANCED'))
        );  
```

The solution is to use shareReplay operator, the course$ observable will be shared across multiple subscriptions
```ts
    const courses$ = http$.pipe(
      tap(() => console.log('HTTP request executed')),
      map(resp => resp["payload"]),
      shareReplay()
    );
    this.beginnerCourses$ = http$
      .pipe(
          map(courses => courses.filter(course => course.category === 'BEGINNER'))
      );  
    this.advancedCourses$ = http$
      .pipe(
          map(courses => courses.filter(course => course.category === 'ADVANCED'))
      );  
```
