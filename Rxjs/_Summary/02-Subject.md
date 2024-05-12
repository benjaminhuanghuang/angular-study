
# Subjects

Subject is a special type of Observable that allows values to be sent to multiple Observers.
Used in service.

```ts
// send data to multiple subscribers
subject.next(data);

// Expose the subject as an observable
subject.asObservable().subscribe((data) => {
  console.log(data);
}); 
```

- Subject Emits next value to current subscribers
- Behavior Subject Emits latest value to current and future subscribers
- ReplaySubject Emits one-or-more previous values to future subscribers
- AsyncSubject will only emit the last value upon completion of the Observable
