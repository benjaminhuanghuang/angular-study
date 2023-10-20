## Inject authentification service into the app component
```ts
export class AppComponent {
  signedin$: BehaviorSubject<boolean>;

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedin$;
  }

  ngOnInit(): void {
    this.authService.checkAuth().subscribe(() => { });
  }
}
``````
