The common key point between observables and promises is that both objects could produce values over time. 

The major difference is that observables can produce none or more than one value, while promises only produce one value when resolved successfully.

The toPromise() subscribes to the Observable and returns the last value emitted by this Observable.
