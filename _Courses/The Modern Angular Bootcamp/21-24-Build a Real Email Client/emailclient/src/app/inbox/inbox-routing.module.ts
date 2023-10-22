import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }    // the path is not 'index'
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
