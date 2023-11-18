import { BehaviorSubject, Subject } from "rxjs";
import { distinctUntilKeyChanged, map, scan } from "rxjs/operators";

export class ObservableStore {
  constructor(initialState) {
    this._store = new BehaviorSubject(initialState);
    this._stateUpdates = new Subject();

    // accumulate state
    this._stateUpdates
      .pipe(
        scan((acc, curr) => {
          return { ...acc, ...curr };
        }, initialState)
      )
      .subscribe(this._store);
  }

  updateState(stateUpdate) {
    this._stateUpdates.next(stateUpdate);
  }

  selectState(stateKey) {
    return this._store.pipe(
      distinctUntilKeyChanged(stateKey),
      map((state) => state[stateKey])
    );
  }

  stateChanges() {
    return this._store.asObservable();
  }
}

// Usage:
const store = new ObservableStore({
  user: "Brian",
  isAuthenticated: false,
});

store.selectState("user").subscribe(console.log);

store.updateState({
  user: "Joe",
});

store.updateState({
  isAuthenticated: true,
});
