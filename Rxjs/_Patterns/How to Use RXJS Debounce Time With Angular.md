# How to Use RXJS Debounce Time With Angular 

https://dev.to/mana95/how-to-use-rxjs-debounce-time-with-angular-4aj5#:~:text=Debounce%20time%20is%20a%20powerful,and%20responsiveness%20of%20your%20application.

Debounce time helps efficiently manage user input and optimize application

## What is Debounce Time?
Debounce time is a technique used to prevent an event from being triggered too frequently

we can use debounce time to delay the request and ensure it is sent only after the user has paused typing for a certain duration


- debounceTime() pipe
The debounceTime pipe is a built-in Angular pipe that can be used to debounce an event. To use the debounceTime pipe, you need to pass the debounce time in milliseconds as an delay. This delay allows the timer to reset if the user continues typing within the specified time

- distinctUntilChanged()
distinctUntilChanged is an operator that is used to filter out consecutive emissions of the same value from an Observable. This can be useful in situations where you want to `prevent the Observable from emitting the same value multiple times in a row`.

- takeUntil()
The takeUntil() operator in Angular is used to automatically `unsubscribe from an Observable when another Observable emits a value`. 
This can be useful in situations where you want to prevent an Observable from emitting values after a certain point.

The template
```
<input type="text" 
  [(ngModel)]="inputText" 
  placeholder="Input something" (input)="onSearch()" />
```

The component
```
import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';


export class DebounceExampleComponent implements OnInit, OnDestroy {
  private searchSubject = new Subject<string>();
  private readonly debounceTimeMs = 300; // Set the debounce time (in milliseconds)
  inputText: string = '';

  ngOnInit() {
    this.searchSubject
      .pipe(debounceTime(this.debounceTimeMs))
      .subscribe((searchValue) => {
        this.performSearch(searchValue);
      });
  }

  ngOnDestroy() {
    this.searchSubject.complete();
  }

  // This method is called whenever the user types something in the input box
  onSearch(searchValue: string) {
    this.searchSubject.next(searchValue);
  }

  performSearch(searchValue: string) {
    // Perform the actual search operation here
    console.log('Performing search for:', searchValue);
    // ... Your search logic ...
  }
}
```
