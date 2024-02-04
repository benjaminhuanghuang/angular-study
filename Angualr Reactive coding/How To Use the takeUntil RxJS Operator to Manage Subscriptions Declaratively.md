# How To Use the takeUntil RxJS Operator to Manage Subscriptions Declaratively

https://www.digitalocean.com/community/tutorials/angular-takeuntil-rxjs-unsubscribe


If your component has many subscriptions, it can quickly become quite a process to ensure everything gets unsubscribed when the component is destroyed.
```ts

  ngOnInit() {
    this.myQuerySubscription = this.apollo.watchQuery<any>().valueChanges.subscribe((data)=> console.log(data));
  }   

  onStartInterval() {
    this.myIntervalSubscription = interval(250).subscribe(value => {
      console.log('Current value:', value);
    });
  }

  ngOnDestroy() {
    this.myQuerySubscription.unsubscribe();

    if (this.myIntervalSubscription) {
      this.myIntervalSubscription.unsubscribe();
    }
  }

```

The solution is to compose the subscriptions with the takeUntil operator and use a subject that emits a truthy value in the ngOnDestroy lifecycle hook.
```ts

@Component({ ... })
export class AppComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery<any>()
    .valueChanges
    .pipe(takeUntil(this.destroy$))    // compose the subscriptions with the takeUntil operator 
    .subscribe(({data}) => {
      console.log(data);
    });
  }

  onStartInterval() {
    interval(250)
    .pipe(takeUntil(this.destroy$))  // compose the subscriptions with the takeUntil operator 
    .subscribe(value => {
      console.log('Current value:', value);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
```
