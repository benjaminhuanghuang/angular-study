## The router
```
const routes: Routes = [
  { path: '', redirectTo: '/listings', pathMatch: 'full' },
  { path: 'listings', component: ListingsPageComponent, pathMatch: 'full' },
  { path: 'listings/:id', component: ListingDetailPageComponent },
];
```


## The List
```
  <a routerLink="/listings/{{listing.id}}">
```

## The Detail page
````
import { ActivatedRoute } from '@angular/router';

export class ListingDetailPageComponent implements OnInit {

  // Inject 
  constructor(private route: ActivatedRoute) { }

  // read parameter
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
  }

}
```