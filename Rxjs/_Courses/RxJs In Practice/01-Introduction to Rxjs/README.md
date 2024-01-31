# Introduction to Rxjs

## What are streams of values
mouse click,  setInterval(), setTimeout(), http requests


## What is Observables
A definition for a stream of values, specifies what values is being emitted over time
```
    // A definition for a stream of values, specifies what values is being emitted over time
    const interval$ = interval(1000);

    const click$ = fromEvent(document, 'click');
```
## Core RxJs Concepts - Errors, Completion and Subscriptions
The parameter passed to subscribe() method
1. pass a object
2. pass a next function
   
## Learn How Observables Work Under the Hood, Build Your Own HTTP Observable
```
    /*
        The function (observer)=>{} passed in implements the behavior of the observable
    */
    const http$ = new Observable(observer => {
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
    )
```
