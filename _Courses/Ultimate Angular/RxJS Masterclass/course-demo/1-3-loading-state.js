import { Subject } from "rxjs";

const loadingOverlay = document.getElementById("loading-overlay");
const loading$ = new Subject();

loading$.subscribe((isLoading) => {
  if (isLoading) {
    loadingOverlay.classList.add("open");
  } else {
    loadingOverlay.classList.remove("open");
  }
});

loadingOverlay.classlist.add("open");

loading$.next(true);

setTimeout(() => {
  loading$.next(false);
}, 2000);
