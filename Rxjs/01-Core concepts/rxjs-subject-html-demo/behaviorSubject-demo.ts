import { fromEvent, BehaviorSubject, map, withLatestFrom } from "rxjs";


const loggedInSpan: HTMLElement = document.querySelector('span#logged-in');
const loginButton: HTMLElement = document.querySelector('button#login');
const logoutButton: HTMLElement = document.querySelector('button#logout');
const printStateButton: HTMLElement = document.querySelector('button#print-state');

const isLoggedIn$ = new BehaviorSubject<boolean>(false);

fromEvent(loginButton, 'click').subscribe(() => isLoggedIn$.next(true));
fromEvent(logoutButton, 'click').subscribe(() => isLoggedIn$.next(false));


isLoggedIn$.subscribe((isLoggedIn) => {
    (loggedInSpan as HTMLSpanElement).innerText = isLoggedIn.toString();
})


isLoggedIn$.subscribe((isLoggedIn) => {
    logoutButton.style.display = isLoggedIn ? 'block' : 'none';
    loginButton.style.display = !isLoggedIn ? 'block' : 'none';
})

fromEvent(printStateButton, 'click').pipe(
    withLatestFrom(isLoggedIn$)
).subscribe(
    ([event, state]) => console.log('user is logged in:', state)
);