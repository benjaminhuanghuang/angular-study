
For those using rxjs v.7.0.0 and above you will need to use combineLatestwith
```
    input1Changes$.pipe(
        combineLatestWith(input2Changes$)
    )
```

