import { Routes } from '@angular/router';
//
import { HomeComponent } from './pages/home/home.component';
import { RxjsBasicComponent } from './demos/rxjs-basic/rxjs-basic.component';
import { RxjsCounterComponent } from './demos/rxjs-counter/rxjs-counter.component';
import { RxjsRandomDelayComponent } from './demos/rxjs-random-delay/rxjs-random-delay.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'demos/rxjs-basic',
    component: RxjsBasicComponent,
  },
  {
    path: 'demos/rxjs-counter',
    component: RxjsCounterComponent,
  },
  {
    path: 'demos/rxjs-random-delay',
    component: RxjsRandomDelayComponent,
  }
];
