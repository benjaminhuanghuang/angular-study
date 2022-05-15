
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
  <a routerLink="/pagePath">

  <a [routerLink]="[/pagePath, 'pages2']">

  <router-outlet> </router-outlet>
```

## Active path
```
  routerLinkActive="active" [routerLinkActiveOption]="{exact: true}"
```
## Nav programmatically
```
  constructor(private router: Router) {

  }

  onLoad(){
    this.router.navigate(['/servers'],{ relatevieTo:""})
  }
```

## Fetch parameter
```
  const id = this.route.snapshot.params['id'];
```


```
  this.route.params.subscribe((params: Params)=>{
    this.user.id = params['id']'
  })
```

```
ngOnInit(){
  this.pramsSubscription = this.route.params.subscribe((params: Params)=>{
    this.user.id = params['id']'
  })

}


ngOnDestroy() {
  this.pramsSubscription.unsubscribe();
}
```


## Pass param
```
<a [queryParams]="{allowEdit: '1'}">

```


```
  this.router.navigate(['/server', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: '1'});
```