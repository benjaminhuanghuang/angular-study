import { Routes } from '@angular/router';
//
import { HomeComponent } from './pages/home/home.component';
import { RxjsBasicComponent } from './demos/rxjs-basic/rxjs-basic.component';


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'demos/rxjs-basic',
    component: RxjsBasicComponent,
  }
];
