
```ts
export class AppComponent {
  signedin$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(() => { });

    // auto signout
    setTimeout(() => {
      this.authService.signout().subscribe(() => { });
    }, 5000);
  }
}
```
