
import { Subject } from "rxjs";

const loadingOverlay = document.getElementById('loading-overlay');

const loading$ = new Subject();


const loadingService = {
    showLoading: ()=> loading$.next(true),
    hideLoading: ()=> loading$.next(false),
    loadingStatus$ : loading$.asObservable()
};


loadingService.loadingStatus$.subscribe((isLoading) => {
    if (isLoading) {
        loadingOverlay.classList.add('open');
    }else {
        loadingOverlay.classList.remove('open');
    }
});

loadingService.showLoading();
setTimeout(loadingService.hideLoading, 3000);



