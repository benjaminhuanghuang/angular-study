Handle unsubscribe form Rxjs stream when component getting destroyed

https://www.youtube.com/watch?v=eJs4EJUOnNE


## takeUntil
```ts
export class BannerComponent implements OnDestroy {
  private polling = inject(PollingService);
  private destroys = new Subject<void>();

  pollingStream = this.polling.url$.pipe(
    switchMap (url => this.polling.startPollingData(url)),
    takeUntil (this.destroy$)
  ).subscribe (data => this data = data);
  
  ngOnDestroy (): void {
    this.destroy$.next();
    this.destroy$. complete();
  }
}
```
Memory leak
```ts
  pollingStream = this.polling.url$.pipe(
    takeUntil (this.destroy$)
    switchMap (url => this.polling.startPollingData(url)),
  ).subscribe (data => this data = data);

```


## takeUntilDestroyed
```ts
export class BannerComponent implements OnDestroy {
  private polling = inject(PollingService);
  
  pollingStream = this.polling.url$.pipe(
    switchMap (url => this.polling.startPollingData(url)),
    takeUntilDestroyed (this.destroy$)
  ).subscribe (data => this data = data);
  
  ngOnDestroy (): void {
    this.destroy$.next();
    this.destroy$. complete();
  }
}

```
