import { BehaviorSubject, Subject } from "rxjs";

const loading$ = new BehaviorSubject(true);

export const loadingService = {
  showLoading: () => loading$.next(true),
  hideLoading: () => loading$.next(false),
  loadingState$: loading$.asObservable(),
};

// usage
const loadingOverlay = document.getElementById("loading-overlay");

loadingService.loadingState$.subscribe((isLoading) => {
  if (isLoading) {
    loadingOverlay.classList.add("open");
  } else {
    loadingOverlay.classList.remove("open");
  }
});

setTimeout(() => {
  loadingService.hideLoading();
}, 2000);
