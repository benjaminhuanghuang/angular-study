Operators return a new observable without modifying the input observable

## Filtering
filter
debounceTime
take

## Transformation
тар
scan
switchMap
mergeMap

The scan and reduce RxJS operators are two very similar operators that work very much like the reduce() method of arrays.
The difference is an observable created with scan will emit on each source emission, whereas reduce will emit only once on completion.

## Combination
concat
forkJoin
combineLatest
startWith
