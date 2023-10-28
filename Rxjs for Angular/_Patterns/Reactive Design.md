
## Building Components with RxJs - Imperative Design

Imperative Design bind value to the template
```js
    ngOnInit () {
        const https = createlttpobservable('/api/courses');
        const courses$ = http$.pipe(
            map(res => Object.values(res["payload"]) 
            );
        
        courses$.subscribe(
            courses =>
            {
                this. beginnerCourses = courses. filter(course => course.category === 'BEGINNER');
            }
        );
```

The downside:
Do not put lot of logic in subscribe method.
Do not nest subscribe method

## Building Components with RxJs - Reactive Design
Reactive design bind observable to temple
```ts
    const courses$ = http$.pipe(map(resp => resp["payload"]));
    this.beginnerCourses$ = http$
        .pipe(
            map(courses => courses.filter(course => course.category === 'BEGINNER'))
        );  
```

Use observable in template
```html
    <courses-list [courses]="beginnerCourses$ | async">
```
The benefit:
    The async pipe unsubscribe from the observable once the component get destroyed
    No need to subscribe/unsubscribe from the observable
