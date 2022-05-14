
app.module.ts
```
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

const appRoutes : Routes = [
  { path: 'user', component: UserComponent}
]


@NgModule({
  declarations: [   
  ],
  imports: [
    RouterModule
  ], 
})
export class AppModule {}
```


app.component.html
```
  <a routerLink="/<page>">

  <router-outlet> </router-outlet>
```