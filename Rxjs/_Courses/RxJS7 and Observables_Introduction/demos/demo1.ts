import { Observable } from "rxjs";

// Observable is a object has some callback functions and logic inside
const observable$ = new Observable<string>((subscriber: any) => {
    subscriber.next('A');
    subscriber.next('B');
})

// Observer describe the reaction to each emitted value
const observer = {
    next: (value: string) => console.log("receive :", value)
}
// Subscription runs the callbacks inside Observable and wrap the Observer into 
// a subscriber objet and pass it to Observable
observable$.subscribe(observer)

// Simply pass a function instead of passing the observer object
observable$.subscribe((value) => console.log("receive :", value))