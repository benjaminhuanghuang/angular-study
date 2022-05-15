
```
import {Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page Not found'} },
  { path: '**', redirectTo: '/not-found' }
];
```

show the message
```
  ngOnInit() {
    this.errorMessage = this.route.snapshot.data['message'];
  }
```

Or 

```
  ngOnInit() {
    this.route.data.subscribe((data: Data)=>{
      this.errorMessage = data['message'];
    })
  }
```


