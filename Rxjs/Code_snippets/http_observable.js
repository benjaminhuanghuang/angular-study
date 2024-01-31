const http$ = Observable.create(observer => {
    fetch('api/courses')
        .then(resp => resp.json())
        .then(body => {
            observer.next(body);
            observer.complete();
        })
        .catch(err => {
            observer.error(err);
        });
});


http$.subscribe(
    resp => console.log(resp),
    noop,
    () => console.log('completed'),
)